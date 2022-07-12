import { UuidVO } from "../../domain/value-objects/uuid.vo.js";


export class ProductFindByIdUseCase {
  constructor({ productRepository }) {
    this.productRepository = productRepository;
  }

  async execute(id) {
    const productId = new UuidVO(id);

    // Comprobar si existe id
    const existingProductById = await this.productRepository.getProductById(
      productId
    );
    if (!existingProductById) throw new Error('Product not found');

    // Returno del producto por ID
    return existingProductById;
  }
}
