export class ValueObject {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  assertIsValid(value) {
    throw new Error("Not implemented");
  }

  equals(value) {
    throw new Error("Not implemented");
  }
}
