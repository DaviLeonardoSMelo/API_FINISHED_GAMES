export class PasswordLenghtNotValid extends Error {
    constructor() {
        super('Password length error, must be between 8 and 100 characters.')
    }
}