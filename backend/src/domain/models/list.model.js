import { InvalidCategoryFormatException } from "../errors/invalid-category.exception.js";
import { NameVO } from "../value-objects/name.vo.js";
import { UuidVO } from "../value-objects/uuid.vo.js";

export class List {
  constructor(id, name, produts) {
    this.assertIsValid(id, name, produts);

    this.id = id;
    this.name = name;
    this.produts = produts;
  }

  assertIsValid(id, name, produts) {
    if (
      !(id instanceof UuidVO) ||
      !(name instanceof NameVO) ||
      !typeof produts === Array
    )
      throw new InvalidCategoryFormatException();
  }
}
