import { InvalidCategoryFormatException } from "../errors/invalid-category.exception.js";
import { CompletedVO } from "../value-objects/completed.vo.js";
import { NameVO } from "../value-objects/name.vo.js";
import { UuidVO } from "../value-objects/uuid.vo.js";

export class List {
  constructor(id, name, status, products) {
    this.assertIsValid(id, name, status, products);

    this.id = id;
    this.name = name;
    this.status = status;
    this.products = products;
  }

  assertIsValid(id, name, status, products) {
    if (
      !(id instanceof UuidVO) ||
      !(name instanceof NameVO) ||
      !(status instanceof CompletedVO) ||
      !typeof products === Array
    )
      throw new InvalidCategoryFormatException();
  }
}
