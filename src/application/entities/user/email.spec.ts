import { EmailLenghtNotValid } from '@application/use-cases/errors/user-errors/email-length-not-valid';
import { Email } from './Email';
import { EmailFormatNotValid } from '@application/use-cases/errors/user-errors/email-invalid-format';

describe('Email', () => {
    it('should create a valid email', () => {
      const validEmail = 'user@example.com';
      expect(() => new Email(validEmail)).not.toThrow();
    });
  
    it('should throw an error for an email with invalid format', () => {
      const invalidEmail = 'invalid_email';
      expect(() => new Email(invalidEmail)).toThrow(EmailFormatNotValid);
    });
  
    it('should throw an error for an email with invalid length', () => {
      const longEmail = 'a'.repeat(501);
      expect(() => new Email(longEmail)).toThrow(EmailLenghtNotValid);
    });
  });