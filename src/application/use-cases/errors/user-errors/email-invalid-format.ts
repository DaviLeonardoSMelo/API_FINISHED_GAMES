export class EmailFormatNotValid extends Error {
    constructor() {
        super('Invalid email format.')
    }
}