import { InvalidCategoryFormatException } from "../errors/invalid-category.exception.js";
import { NameVO } from "../value-objects/name.vo.js";
import { UuidVO } from "../value-objects/uuid.vo.js";

export class Category {
  constructor(id, name) {
    this.assertIsValid(id, name);

    this.id = id;
    this.name = name;
  }

  assertIsValid(id, name, note) {
    if (
      !(id instanceof UuidVO) ||
      !(name instanceof NameVO)
    )
      throw new InvalidCategoryFormatException();
  }
}
