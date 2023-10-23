import { Email } from './Email';

describe('Email', () => {
    it('should create a valid email', () => {
      const validEmail = 'user@example.com';
      expect(() => new Email(validEmail)).not.toThrow();
    });
  
    it('should throw an error for an email with invalid format', () => {
      const invalidEmail = 'invalid_email';
      expect(() => new Email(invalidEmail)).toThrow('Invalid email format.');
    });
  
    it('should throw an error for an email with invalid length', () => {
      const longEmail = 'a'.repeat(501);
      expect(() => new Email(longEmail)).toThrow('Email length error, must be between 10 and 500 characters.');
    });
  });