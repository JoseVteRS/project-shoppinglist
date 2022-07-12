import { UnnecesaryFieldsFormatException } from "../errors/unnecesary-fields.exception.js";

export class ProductListGroupedByCategoryController {
  constructor({ productListGroupedByCategoryUseCase }) {
    this.productListGroupedByCategoryUseCase = productListGroupedByCategoryUseCase;
  }

  async execute(req, res, next) {
    const { ...body } = req.body;

    try {
      if (Object.keys(body).length !== 0)
        throw new UnnecesaryFieldsFormatException();

      const foundProducts = await this.productListGroupedByCategoryUseCase.execute();

      res.status(200).send({ data: foundProducts });
    } catch (error) {
      next(error);
    }
  }
}
