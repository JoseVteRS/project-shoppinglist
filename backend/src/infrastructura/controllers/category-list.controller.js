import { UnnecesaryFieldsFormatException } from "../errors/unnecesary-fields.exception.js";

export class CategoryListController {
  constructor({ categoryListUseCase }) {
    this.categoryListUseCase = categoryListUseCase;
  }

  async execute(req, res, next) {
    const { ...body } = req.body;

    try {
      if (Object.keys(body).length !== 0)
        throw new UnnecesaryFieldsFormatException();

      const foundCategories = await this.categoryListUseCase.execute();

      res.status(200).send({ data: foundCategories });
    } catch (error) {
      next(error);
    }
  }
}
