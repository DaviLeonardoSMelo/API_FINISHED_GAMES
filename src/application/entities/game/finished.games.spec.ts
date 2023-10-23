import { GameFinished } from "./finished.games";
import { Resume } from "./resume";
import { Score } from "./score";

describe('Finished Game ', () => {
    it('should be able to register a finished game', () => {
    const game = new GameFinished({
        nameGame: 'Grand Theft Auto',
        finishedDate: new Date(2023, 10, 13),
        registerDate: new Date(2023, 10, 13),
        resume: new Resume('esse jogo é muito divertido!'),
        score: new Score(8),
        gameplayTime: 22,
        hundredPercent: false,
        userId: '1',
    });

    expect(game).toBeTruthy()
    })
})