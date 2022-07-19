import { ValueObject } from "../value-object.js";

const LIST_STATUS = ["COMPLETED", "CANCELLED", "IN_PROGRESS", "INIT"];

export class CompletedVO extends ValueObject {
  equals(valueObject) {
    return (
      valueObject instanceof CompletedVO && this.value === valueObject.value
    );
  }

  assertIsValid(value) {
    if (typeof value !== "string" || !LIST_STATUS.some(value))
      throw new VOFormatException(CompletedVO.name, value);
  }
}
