import { v4 as uuidv4 } from "uuid";

export class ListCreateController {
  constructor({ listCreateUseCase }) {
    this.listCreateUseCase = listCreateUseCase;
  }

  async execute(req, res, next) {
    const { name, status, products, ...rest } = req.body;

    try {
      if (!name || !products) throw new Error("Missing fields");
      if (Object.keys(rest).length !== 0) throw new Error("Unnecesary fields");

      const listId = uuidv4();

      await this.listCreateUseCase.execute(listId, name, status, products);

      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
