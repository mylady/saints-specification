export class SpecError extends Error {
    code: number

    constructor(message: string, code: number) {
        super(message);
        this.code = code;
    }
}