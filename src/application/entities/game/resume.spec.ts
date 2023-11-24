/* eslint-disable prettier/prettier */
import { ResumeLengthNotValid } from "@application/use-cases/errors/game-erros/resume-length-not-valid";
import { Resume } from "./resume"
describe('Game resume', () => {
    it('should be able to create a resume game', () => {
    const resume = new Resume('esse jogo é muito divertido!');

    expect(resume).toBeTruthy()
    })
    it('should not be able to create a game resume with less than 5 characters', () =>{
    expect(() => new Resume('abc')).toThrow(ResumeLengthNotValid)
    })
    it('should not be able to create a game resume with more than 2000 characters', () =>{
        expect(() => new Resume('a'.repeat(2001))).toThrow(ResumeLengthNotValid)
        })
})