import { DomainFormatException } from "./domain-format.exception.js";


export class InvalidProductFormatException extends DomainFormatException {
    constructor() {
        super(`Formato de usuario inválido`);
    }
}