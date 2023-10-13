/* eslint-disable prettier/prettier */
export class Score {
    private readonly score: number;

    get value(): number {
        return this.score
    }

    private validateScoreLenght(score: number): boolean {
        return score > 0 && score < 10
    }

    constructor(score: number) {
        const isScoreLenghtValid = this.validateScoreLenght(score);
        if (!isScoreLenghtValid) {
            throw new Error('Score lenght error, minus 0 points or over 10 points.')
        }
        this.score = score
    }
}
