export class NameLenghtNotValid extends Error {
    constructor() {
        super('Name length error, must be between 3 and 50 characters.')
    }
}