import uuid from 'uuid';
import { VOFormatException } from '../errors/vo-format.exception';
import { ValueObject } from "../value-object";


export class UuidVO extends ValueObject {
    equils(valueObject) {
        return (valueObject instanceof UuidVO && this.value === this.valueObject.value)
    }

    assertIsValid(value) {
        if(!uuid.validate(value))
            throw new VOFormatException(UuidVO.name, value);
    }
}