/* eslint-disable prettier/prettier */
import { Score } from "./score"
describe('Game score', () => {
    it('should be able to give a game score', () => {
    const score = new Score(7);

    expect(score).toBeTruthy()
    })
    it('should not be able to create a game score with less than 0 points', () =>{
    expect(() => new Score(-2)).toThrow()
    })
    it('should not be able to create a game score with more than 10 points', () =>{
        expect(() => new Score(11)).toThrow()
        })
})