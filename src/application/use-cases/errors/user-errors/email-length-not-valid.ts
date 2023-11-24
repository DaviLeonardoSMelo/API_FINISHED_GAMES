export class EmailLenghtNotValid extends Error {
    constructor() {
        super('Email length error, must be between 10 and 500 characters.')
    }
}