import { Name } from './name'; 

describe('Name', () => {
  it('should create a valid name', () => {
    const validName = 'John Doe';
    expect(() => new Name(validName)).not.toThrow();
  });

  it('should throw an error for a name with less than 3 characters', () => {
    const shortName = 'A';
    expect(() => new Name(shortName)).toThrow('Name length error, must be between 3 and 50 characters.');
  });

  it('should throw an error for a name with more than 50 characters', () => {
    const longName = 'A'.repeat(51);
    expect(() => new Name(longName)).toThrow('Name length error, must be between 3 and 50 characters.');
  });
});