import { ResumeLengthNotValid } from "@application/use-cases/errors/game-erros/resume-length-not-valid";

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
            throw new ResumeLengthNotValid()
        }
        this.resume = resume
    }
}
