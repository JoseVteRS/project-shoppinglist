import { UuidVO } from "../../domain/value-objects/uuid.vo.js";

export class CategoryFindByIdUseCase {
  constructor({ categoryRepository }) {
    this.categoryRepository = categoryRepository;
  }

  async execute(id) {
    const categoryId = new UuidVO(id);

    // Comprobar si existe id
    const existingCategoryById = await this.categoryRepository.getCategoryById(
      categoryId
    );
    if (!existingCategoryById) throw new Error("Category not found");

    // Returno del category por ID
    return existingCategoryById;
  }
}
