import { DomainFormatException } from "./domain-format.exception";


export class InvalidProductFormatException extends DomainFormatException {
    constructor() {
        super(`Formato de usuario inválido`);
    }
}