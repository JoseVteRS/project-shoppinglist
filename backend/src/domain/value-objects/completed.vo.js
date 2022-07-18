import { ValueObject } from "../value-object.js";


export class CompletedVO extends ValueObject {
  equals(valueObject) {
    return valueObject instanceof CompletedVO && this.value === valueObject.value;
  }

  assertIsValid(value) {
    if (typeof value !== "boolean")
      throw new VOFormatException(CompletedVO.name, value);
  }
}