import { MissingFieldsFormatException } from "../errors/missing-fields.exception.js";
import { UnnecesaryFieldsFormatException } from "../errors/unnecesary-fields.exception.js";

export class CategoryFindByIdController {
  constructor({ categoryFindByIdUseCase }) {
    this.categoryFindByIdUseCase = categoryFindByIdUseCase;
  }

  async execute(req, res, next) {
    const { id, ...rest } = req.params;

    try {
      if (!id) throw new MissingFieldsFormatException();
      if (Object.keys(rest).length !== 0)
        throw new UnnecesaryFieldsFormatException();

      const foundCategoryById = await this.categoryFindByIdUseCase.execute(id);

      res.status(200).send({ data: foundCategoryById });
    } catch (error) {
      next(error);
    }
  }
}
