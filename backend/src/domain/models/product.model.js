import { InvalidProductFormatException } from "../errors/invalid-product.exception.js";
import { NameVO } from "../value-objects/name.vo.js";
import { NoteVO } from "../value-objects/note.vo.js";
import { UuidVO } from "../value-objects/uuid.vo.js";

export class Product {
  constructor(id, name, note, category) {
    this.assertIsValid(id, name, note, category);

    this.id = id;
    this.name = name;
    this.note = note;
    this.category = category;
  }

  assertIsValid(id, name, note, category) {
    if (
      !(id instanceof UuidVO) ||
      !(name instanceof NameVO) ||
      !(note instanceof NoteVO) ||
      !(category instanceof UuidVO)
    )
      throw new InvalidProductFormatException();
  }
}
