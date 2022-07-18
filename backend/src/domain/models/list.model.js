import { InvalidCategoryFormatException } from "../errors/invalid-category.exception.js";
import { CompletedVO } from "../value-objects/completed.vo.js";
import { NameVO } from "../value-objects/name.vo.js";
import { UuidVO } from "../value-objects/uuid.vo.js";

export class List {
  constructor(id, name, completed, produts) {
    this.assertIsValid(id, name, completed, produts);

    this.id = id;
    this.name = name;
    this.completed = completed;
    this.produts = produts;
  }

  assertIsValid(id, name, completed, produts) {
    if (
      !(id instanceof UuidVO) ||
      !(name instanceof NameVO) ||
      !(completed instanceof CompletedVO) ||
      !typeof produts === Array
    )
      throw new InvalidCategoryFormatException();
  }
}
