import { MissingFieldsFormatException } from "../errors/missing-fields.exception.js";
import { UnnecesaryFieldsFormatException } from "../errors/unnecesary-fields.exception.js";

export class ProductFindByIdController {
  constructor({ productFindByIdUseCase }) {
    this.productFindByIdUseCase = productFindByIdUseCase;
  }

  async execute(req, res, next) {
    const { id, ...rest } = req.params;

    try {
      if (!id) throw new MissingFieldsFormatException();
      if (Object.keys(rest).length !== 0)
        throw new UnnecesaryFieldsFormatException();

      const foundProductById = await this.productFindByIdUseCase.execute(id);

      res.status(200).send({ data: foundProductById });
    } catch (error) {
      next(error);
    }
  }
}
