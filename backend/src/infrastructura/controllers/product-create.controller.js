import { v4 as uuidv4 } from "uuid";
import { MissingFieldsFormatException } from "../errors/missing-fields.exception.js";
import { UnnecesaryFieldsFormatException } from "../errors/unnecesary-fields.exception.js";

export class ProductCreateController {
  constructor({ productCreateUseCase }) {
    this.productCreateUseCase = productCreateUseCase;
  }

  async execute(req, res, next) {
    const { name, note, category, ...rest } = req.body;

    try {
      if (!name || !category) throw new MissingFieldsFormatException();
      if (Object.keys(rest).length !== 0)
        throw new UnnecesaryFieldsFormatException();

      const productId = uuidv4();

      await this.productCreateUseCase.execute(productId, name, note, category);

      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
