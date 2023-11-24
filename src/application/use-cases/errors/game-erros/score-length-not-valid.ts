export class ScoreLengthNotValid extends Error {
    constructor() {
        super('Score lenght error, less 0 points or over 10 points.')
    }
}