import { v4 as uuidv4 } from "uuid";
import { VOFormatException } from '../errors/vo-format.exception.js';
import { ValueObject } from "../value-object.js";


export class UuidVO extends ValueObject {
    equils(valueObject) {
        return (valueObject instanceof UuidVO && this.value === this.valueObject.value)
    }

    assertIsValid(value) {
        if (!uuidv4.validate(value))
          throw new VOFormatException(UuidVO.name, value);
    }
}