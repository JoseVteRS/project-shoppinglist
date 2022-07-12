import { MissingFieldsFormatException } from "../errors/missing-fields.exception.js";
import { UnnecesaryFieldsFormatException } from "../errors/unnecesary-fields.exception.js";

export class ProductListController {
  constructor({ productListUseCase }) {
    this.productListUseCase = productListUseCase;
  }

  async execute(req, res, next) {
    const { ...body } = req.body;

    try {
      if (Object.keys(body).length !== 0)
        throw new UnnecesaryFieldsFormatException();

      const foundProducts = await this.productListUseCase.execute();

      res.status(200).send({ data: foundProducts });
    } catch (error) {
      next(error);
    }
  }
}
