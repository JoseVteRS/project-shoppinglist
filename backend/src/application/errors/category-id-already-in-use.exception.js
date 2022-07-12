import { ApplicationConflictException } from "./application-conflict.exception.js";

export class CategoryIdAlreadyInUse extends ApplicationConflictException {
  constructor() {
    super(`El ID de la categoria ya está en uso`);
  }
}
