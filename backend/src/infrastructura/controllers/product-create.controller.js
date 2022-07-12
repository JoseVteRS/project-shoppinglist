import { v4 as uuidv4 } from "uuid";

export class ProductCreateController {
  constructor({ productCreateUseCase }) {
    this.productCreateUseCase = productCreateUseCase;
  }

  async execute(req, res, next) {
    const { name, ...rest } = req.body;

    try {
      if (!name) throw new Error("Faltan campos");
      if (Object.keys(rest).length !== 0) throw new Error("Sobran campos");

      const produtId = uuidv4();

      await this.productCreateUseCase.execute(produtId, name);

      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
