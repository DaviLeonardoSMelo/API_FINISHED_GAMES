import { PasswordComplexityNotValid } from "@application/use-cases/errors/user-errors/password-complexity-not-valid";
import { PasswordLenghtNotValid } from "@application/use-cases/errors/user-errors/password-length-not-valid";

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
            throw new PasswordLenghtNotValid();
        }
    }

    private validatePasswordComplexity(password: string): void {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);

        if (!(hasUppercase && hasLowercase && hasNumber)) {
            throw new PasswordComplexityNotValid();
        }
    }
}