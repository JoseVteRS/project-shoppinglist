import { InvalidProductFormatException } from "../errors/invalid-product.exception.js";
import { NameVO } from "../value-objects/name.vo.js";
import { UuidVO } from "../value-objects/uuid.vo.js";

export class Product {
  constructor(id, name) {
    this.assertIsValid(id, name);

    this.id = id;
    this.name = name;
  }

  assertIsValid(id, name) {
    if (!(id instanceof UuidVO) || !(name instanceof NameVO))
      throw new InvalidProductFormatException();
  }
}
