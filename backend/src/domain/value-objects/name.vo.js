import { VOFormatException } from "../errors/vo-format.exception";
import { ValueObject } from "../value-object";



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