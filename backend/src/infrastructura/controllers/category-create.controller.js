import { v4 as uuidv4 } from "uuid";
import { MissingFieldsFormatException } from "../errors/missing-fields.exception.js";
import { UnnecesaryFieldsFormatException } from "../errors/unnecesary-fields.exception.js";

export class CategoryCreateController {
  constructor({ categoryCreateUseCase }) {
    this.categoryCreateUseCase = categoryCreateUseCase;
  }

  async execute(req, res, next) {
    const { name, ...rest } = req.body;

    try {
      if (!name) throw new MissingFieldsFormatException();
      if (Object.keys(rest).length !== 0)
        throw new UnnecesaryFieldsFormatException();

      const categoryId = uuidv4();

      await this.categoryCreateUseCase.execute(categoryId, name);

      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
