import { Name } from '../name';
import { Email } from './email';
import { Password } from './password';
import { User } from './user'; 

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
        })).toThrow('Invalid email format.');
  });

  it('should throw an error for an invalid password', () => {
    const invalidPassword = 'invalidpassword1';
    expect(() => new User({
            userName: new Name('John Doe'),
            email: new Email('user@example.com'),
            password: new Password(invalidPassword),
        })).toThrow('Password must contain at least one uppercase letter, one lowercase letter, and one number.');
  });

  it('should throw an error for an invalid name (less than 3 characters)', () => {
    const invalidName = 'A';
    expect(() => new User({
            userName: new Name(invalidName),
            email: new Email('user@example.com'), 
            password: new Password('Valid123'), 
        })).toThrow('Name length error, must be between 3 and 50 characters.');
  });

  it('should throw an error for an invalid name (more than 50 characters)', () => {
    const invalidName = 'A'.repeat(51);
    expect(() => new User({
            userName: new Name(invalidName),
            email: new Email('user@example.com'), 
            password: new Password('Valid123'), 
    })).toThrow('Name length error, must be between 3 and 50 characters.');
  });
});