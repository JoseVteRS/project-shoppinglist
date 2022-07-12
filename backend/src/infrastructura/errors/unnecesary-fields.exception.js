import { InfrastructureFormatException } from "./infratructure-format.exception.js";

export class UnnecesaryFieldsFormatException extends InfrastructureFormatException {
  constructor() {
    super("Existen campos sobrantes");
  }
}
