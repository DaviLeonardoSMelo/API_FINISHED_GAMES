import { NameLenghtNotValid } from '@application/use-cases/errors/user-errors/name-user-length-not-valid';
import { Name } from './name'; 

describe('Name', () => {
  it('should create a valid name', () => {
    const validName = 'John Doe';
    expect(() => new Name(validName)).toBeTruthy();
  });

  it('should throw an error for a name with less than 3 characters', () => {
    const shortName = 'A';
    expect(() => new Name(shortName)).toThrow(NameLenghtNotValid);
  });

  it('should throw an error for a name with more than 50 characters', () => {
    const longName = 'A'.repeat(51);
    expect(() => new Name(longName)).toThrow(NameLenghtNotValid);
  });
});