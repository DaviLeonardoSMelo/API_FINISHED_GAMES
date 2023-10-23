import { Password } from './Password';

describe('Password', () => {
    it('should create a valid password', () => {
      const validPassword = 'Valid123';
      expect(() => new Password(validPassword)).not.toThrow();
    });
  
    it('should throw an error for a short password', () => {
      const shortPassword = 'Short';
      expect(() => new Password(shortPassword)).toThrow('Password length error, must be between 8 and 100 characters.');
    });
  
    it('should throw an error for a password without uppercase letter', () => {
      const password = 'invalidpassword1';
      expect(() => new Password(password)).toThrow('Password must contain at least one uppercase letter, one lowercase letter, and one number.');
    });
  });