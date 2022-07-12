import { DomainFormatException } from "./domain-format.exception.js";

export class InvalidCategoryFormatException extends DomainFormatException {
  constructor() {
    super(`Formato de categoria inválido`);
  }
}
