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
            throw new Error('Name lenght error, minus 3 characters or over 50 characters.')
        }
        this.name = name
    }
}
