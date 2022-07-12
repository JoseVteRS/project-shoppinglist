import { InvalidProductFormatException } from "../errors/invalid-product.exception.js";
import { NameVO } from "../value-objects/name.vo.js";
import { NoteVO } from "../value-objects/note.vo.js";
import { UuidVO } from "../value-objects/uuid.vo.js";

export class Product {
  constructor(id, name, note) {
    this.assertIsValid(id, name, note);

    this.id = id;
    this.name = name;
    this.note = note;
  }

  assertIsValid(id, name, note) {
    if (
      !(id instanceof UuidVO) ||
      !(name instanceof NameVO) ||
      !(note instanceof NoteVO)
    )
      throw new InvalidProductFormatException();
  }
}
