import { Name } from "../name";
import { Game } from "./game";

describe('Game ', () => {
    it('should be able to register a game', () => {
    const game = new Game({
        nameGame: new Name('Grand Theft Auto'),
        creator: 'Rockstars',
    });

    expect(game).toBeTruthy()
    })
})