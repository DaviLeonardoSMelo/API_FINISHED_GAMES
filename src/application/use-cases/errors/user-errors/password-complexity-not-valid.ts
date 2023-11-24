export class PasswordComplexityNotValid extends Error {
    constructor() {
        super('Password must contain at least one uppercase letter, one lowercase letter, and one number.')
    }
}