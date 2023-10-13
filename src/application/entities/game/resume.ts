/* eslint-disable prettier/prettier */
export class Resume {
    private readonly resume: string;

    get value(): string {
        return this.resume
    }

    private validateResumeLenght(resume: string): boolean {
        return resume.length >= 5 && resume.length <= 2000
    }

    constructor(resume: string) {
        const isResumeLenghtValid = this.validateResumeLenght(resume);
        if (!isResumeLenghtValid) {
            throw new Error('Resume lenght error, minus 5 characters or over 2000 characters.')
        }
        this.resume = resume
    }
}
