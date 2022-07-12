import { Product } from "../../domain/models/product.model.js";
import { NameVO } from "../../domain/value-objects/name.vo.js";
import { NoteVO } from "../../domain/value-objects/note.vo.js";
import { UuidVO } from "../../domain/value-objects/uuid.vo.js";
import { ProductIdAlreadyInUse } from "../errors/product-id-already-in-use.exception.js";

export class ProductCreateUseCase {
  constructor({ productRepository }) {
    this.productRepository = productRepository;
  }

  async execute(id, name, note) {
    const productId = new UuidVO(id);

    const newProduct = new Product(productId, new NameVO(name), new NoteVO(note));

    // Comprobar si existe id duplicado
    const existingProductById = await this.productRepository.findById(
      productId
    );
    if (existingProductById) throw new ProductIdAlreadyInUse();

    // Persistir el nuevo producto
    await this.productRepository.create(newProduct);
  }
}
