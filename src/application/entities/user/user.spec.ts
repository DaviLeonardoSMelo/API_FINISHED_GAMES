import { NameLenghtNotValid } from '@application/use-cases/errors/user-errors/name-user-length-not-valid';
import { Name } from '../name';
import { Email } from './email';
import { Password } from './password';
import { User } from './user'; 
import { PasswordComplexityNotValid } from '@application/use-cases/errors/user-errors/password-complexity-not-valid';
import { PasswordLenghtNotValid } from '@application/use-cases/errors/user-errors/password-length-not-valid';
import { EmailFormatNotValid } from '@application/use-cases/errors/user-errors/email-invalid-format';

describe('User ', () => {
  it('should create a valid user', () => {
    const validUser = new User({
            userName: new Name('John Doe'), 
            email: new Email('user@example.com'), 
            password: new Password('Valid123'),
        });

    expect(validUser).toBeInstanceOf(User);
  });

  it('should throw an error for an invalid email', () => {
    const invalidEmail = 'invalid_email';
    expect(() => new User({
            userName: new Name('John Doe'),
            email: new Email(invalidEmail), 
            password: new Password('Valid123'), 
        })).toThrow(EmailFormatNotValid);
  });

  it('should throw an error for an invalid password', () => {
    const invalidPassword = 'invalidpassword1';
    expect(() => new User({
            userName: new Name('John Doe'),
            email: new Email('user@example.com'),
            password: new Password(invalidPassword),
        })).toThrow(PasswordComplexityNotValid);
  });

  it('should throw an error for an invalid password length', () => {
    const invalidPassword = '1';
    expect(() => new User({
            userName: new Name('John Doe'),
            email: new Email('user@example.com'),
            password: new Password(invalidPassword),
        })).toThrow(PasswordLenghtNotValid);
  });

  it('should throw an error for an invalid password length', () => {
    const invalidPassword = '1'.repeat(101);
    expect(() => new User({
            userName: new Name('John Doe'),
            email: new Email('user@example.com'),
            password: new Password(invalidPassword),
        })).toThrow(PasswordLenghtNotValid);
  });

  it('should throw an error for an invalid name (less than 3 characters)', () => {
    const invalidName = 'A';
    expect(() => new User({
            userName: new Name(invalidName),
            email: new Email('user@example.com'), 
            password: new Password('Valid123'), 
        })).toThrow(NameLenghtNotValid);
  });

  it('should throw an error for an invalid name (more than 50 characters)', () => {
    const invalidName = 'A'.repeat(51);
    expect(() => new User({
            userName: new Name(invalidName),
            email: new Email('user@example.com'), 
            password: new Password('Valid123'), 
    })).toThrow(NameLenghtNotValid);
  });
});