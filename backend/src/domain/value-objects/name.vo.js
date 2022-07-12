import { VOFormatException } from "../errors/vo-format.exception.js";
import { ValueObject } from "../value-object.js";



export class NameVO extends ValueObject {
      equals(valueObject) {
        return (
            valueObject instanceof NameVO && this.value === valueObject.value
        );
    }

    assertIsValid(value) {
        if (typeof value !== 'string' ) 
            throw new VOFormatException(NameVO.name, value);
    }
}