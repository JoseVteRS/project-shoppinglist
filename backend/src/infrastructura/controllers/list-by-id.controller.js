import { MissingFieldsFormatException } from "../errors/missing-fields.exception.js";
import { UnnecesaryFieldsFormatException } from "../errors/unnecesary-fields.exception.js";

export class ListByIdController {
  constructor({ listByIdUseCase }) {
    this.listByIdUseCase = listByIdUseCase;
  }

  async execute(req, res, next) {
    const { id, ...rest } = req.params;

    try {
      if (!id) throw new MissingFieldsFormatException();
      if (Object.keys(rest).length !== 0)
        throw new UnnecesaryFieldsFormatException();

      const foundedList = await this.listByIdUseCase.execute(id);

      res.status(200).send({ data: foundedList });
    } catch (error) {
      next(error);
    }
  }
}