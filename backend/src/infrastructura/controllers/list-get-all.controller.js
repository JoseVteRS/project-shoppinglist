import { UnnecesaryFieldsFormatException } from "../errors/unnecesary-fields.exception.js";


export class ListGetAllController {
  constructor({ listGetAllUseCase }) {
    this.listGetAllUseCase = listGetAllUseCase;
  }

  async execute(req, res, next) {
    const { ...body } = req.body;

    try {
      if (Object.keys(body).length !== 0)
        throw new UnnecesaryFieldsFormatException();

      const foundLists = await this.listGetAllUseCase.execute();

      res.status(200).send({ data: foundLists });
    } catch (error) {
      next(error);
    }
  }
}