

export class ProductListUseCase {
  constructor({ productRepository }) {
    this.productRepository = productRepository;
  }

  async execute() {

    const existingProducts = await this.productRepository.getProducts();
    if (!existingProducts) throw new Error("Products not found");

    // Returno de los productos
    return existingProducts;
  }
}
