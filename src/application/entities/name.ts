export class Name {
    private readonly name: string;

    get value(): string {
        return this.name
    }

    private validateResumeLenght(name: string): boolean {
        return name.length >= 5 && name.length <= 50
    }

    constructor(name: string) {
        const isResumeLenghtValid = this.validateResumeLenght(name);
        if (!isResumeLenghtValid) {
            throw new Error('Lenght lenght error, minus 5 characters or over 50 characters.')
        }
        this.name = name
    }
}
