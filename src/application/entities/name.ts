export class Name {
    private readonly name: string;

    get value(): string {
        return this.name
    }

    private validateNameLenght(name: string): boolean {
        return name.length >= 3 && name.length <= 50
    }

    constructor(name: string) {
        const isNameLenghtValid = this.validateNameLenght(name);
        if (!isNameLenghtValid) {
            throw new Error('Name length error, must be between 3 and 50 characters.')
        }
        this.name = name
    }
}
