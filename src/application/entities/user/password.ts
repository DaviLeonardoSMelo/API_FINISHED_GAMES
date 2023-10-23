export class Password {
    private readonly password: string;

    get value(): string {
        return this.password;
    }

    constructor(password: string) {
        this.validatePasswordLength(password);
        this.validatePasswordComplexity(password);
        this.password = password;
    }

    private validatePasswordLength(password: string): void {
        if (password.length < 8 || password.length > 100) {
            throw new Error('Password length error, must be between 8 and 100 characters.');
        }
    }

    private validatePasswordComplexity(password: string): void {
        // Verifique a complexidade da senha, por exemplo, exigindo pelo menos uma letra maiúscula, uma letra minúscula e um número.
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);

        if (!(hasUppercase && hasLowercase && hasNumber)) {
            throw new Error('Password must contain at least one uppercase letter, one lowercase letter, and one number.');
        }
    }
}