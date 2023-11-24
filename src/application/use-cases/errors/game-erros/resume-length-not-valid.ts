export class ResumeLengthNotValid extends Error {
    constructor() {
        super('Resume lenght error, must be between 5 and 2000 characters.')
    }
}