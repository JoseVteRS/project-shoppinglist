import { VOFormatException } from "../errors/vo-format.exception.js";
import { ValueObject } from "../value-object.js";


export class NoteVO extends ValueObject {
  equils(valueObject) {
    return (
      valueObject instanceof NoteVO && this.value === this.valueObject.value
    );
  }

  assertIsValid(value) {
    if (typeof value !== 'string')
      throw new VOFormatException(NoteVO.name, value);
  }
}