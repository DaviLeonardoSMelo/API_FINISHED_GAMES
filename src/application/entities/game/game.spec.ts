import { NameLenghtNotValid } from "@application/use-cases/errors/user-errors/name-user-length-not-valid";
import { Name } from "../name";
import { Game } from "./game";

describe('Game ', () => {
    it('should be able to register a game', () => {
    const validGame = new Game({
        nameGame: new Name('Grand Theft Auto'),
        creator: 'Rockstars',
    });

    expect(validGame).toBeInstanceOf(Game)
    })

    it('should throw an error for an invalid name', () => {
        const invalidName = 'A';
        expect(() => new Game({
                nameGame: new Name(invalidName),
                creator: 'Rockstars', 
            })).toThrow(NameLenghtNotValid);
      });
    it('should throw an error for an invalid name', () => {
        const invalidName = 'A'.repeat(51);
        expect(() => new Game({
                nameGame: new Name(invalidName),
                creator: 'Rockstars', 
            })).toThrow(NameLenghtNotValid);
      });
})

