export class Email {
    private readonly email: string;

    get value(): string {
        return this.email;
    }

    constructor(email: string) {
        this.validateEmailLength(email);
        this.validateEmailFormat(email);
        this.email = email;
    }

    private validateEmailLength(email: string): void {
        if (email.length < 10 || email.length > 500) {
            throw new Error('Email length error, must be between 10 and 500 characters.');
        }
    }

    private validateEmailFormat(email: string): void {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format.');
        }
    }
}