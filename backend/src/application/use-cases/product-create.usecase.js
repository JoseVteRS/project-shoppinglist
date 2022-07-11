import { Product } from "../../domain/models/product.model";
import { NameVO } from "../../domain/value-objects/name.vo";
import { UuidVO } from "../../domain/value-objects/uuid.vo";
import { ProductIdAlreadyInUse } from "../errors/product-id-already-in-use.exception";

export class ProductCreateUseCase {
  constructor({ productRepository }) {
    this.productRepository = productRepository;
  }

  async execute(id, name) {
    const productId = new UuidVO(id);

    const newProduct = new Product(productId, new NameVO(name));

    // Comprobar si existe id duplicado
    const existingProductById = await this.productRepository.findById(
      productId
    );
    if (existingProductById) throw new ProductIdAlreadyInUse();

    // Persistir el nuevo producto
    await this.productRepository.create(newProduct);
  }
}
