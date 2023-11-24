import { PasswordLenghtNotValid } from '@application/use-cases/errors/user-errors/password-length-not-valid';
import { Password } from './Password';
import { PasswordComplexityNotValid } from '@application/use-cases/errors/user-errors/password-complexity-not-valid';

describe('Password', () => {
    it('should create a valid password', () => {
      const validPassword = 'Valid123';
      expect(() => new Password(validPassword)).not.toThrow();
    });
  
    it('should throw an error for a short password', () => {
      const shortPassword = 'Short';
      expect(() => new Password(shortPassword)).toThrow(PasswordLenghtNotValid);
    });
  
    it('should throw an error for a password without uppercase letter', () => {
      const password = 'invalidpassword1';
      expect(() => new Password(password)).toThrow(PasswordComplexityNotValid);
    });
  });