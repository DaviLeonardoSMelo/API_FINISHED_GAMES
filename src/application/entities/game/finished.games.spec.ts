import { NameLenghtNotValid } from "@application/use-cases/errors/user-errors/name-user-length-not-valid";
import { GameFinished } from "./finished.games";
import { Resume } from "./resume";
import { Score } from "./score";
import { ResumeLengthNotValid } from "@application/use-cases/errors/game-erros/resume-length-not-valid";
import { ScoreLengthNotValid } from "@application/use-cases/errors/game-erros/score-length-not-valid";
import { Name } from "../name";

describe('Finished Game ', () => {
    it('should be able to register a finished game', () => {
    const validGameFinished = new GameFinished({
        nameGame: new Name('Grand Theft Auto'),
        finishedDate: new Date(2023, 10, 13),
        registerDate: new Date(2023, 10, 13),
        resume: new Resume('esse jogo é muito divertido!'),
        score: new Score(8),
        gameplayTime: 22,
        hundredPercent: false,
        userId: '1',
    });

    expect(validGameFinished).toBeInstanceOf(GameFinished)
    })
    it('should throw an error for an invalid name', () => {
        const invalidName = 'A'
        expect(() => new GameFinished({
            nameGame: new Name(invalidName),
            finishedDate: new Date(2023, 10, 13),
            registerDate: new Date(2023, 10, 13),
            resume: new Resume('esse jogo é muito divertido!'),
            score: new Score(8),
            gameplayTime: 22,
            hundredPercent: false,
            userId: '1',
        })).toThrow(NameLenghtNotValid)
    });

    it('should throw an error for an invalid name', () => {
        const invalidResume = 'abc'
        expect(() => new GameFinished({
            nameGame: new Name('Grand Theft Auto'),
            finishedDate: new Date(2023, 10, 13),
            registerDate: new Date(2023, 10, 13),
            resume: new Resume(invalidResume),
            score: new Score(8),
            gameplayTime: 22,
            hundredPercent: false,
            userId: '1',
        })).toThrow(ResumeLengthNotValid)
    });
    it('should throw an error for an invalid name', () => {
        const invalidScore = -2
        expect(() => new GameFinished({
            nameGame: new Name('Grand Theft Auto'),
            finishedDate: new Date(2023, 10, 13),
            registerDate: new Date(2023, 10, 13),
            resume: new Resume('esse jogo é muito divertido!'),
            score: new Score(invalidScore),
            gameplayTime: 22,
            hundredPercent: false,
            userId: '1',
        })).toThrow(ScoreLengthNotValid)
    });
})