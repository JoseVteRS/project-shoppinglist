import { Category } from "../../domain/models/category.model.js";
import { NameVO } from "../../domain/value-objects/name.vo.js";
import { UuidVO } from "../../domain/value-objects/uuid.vo.js";
import { CategoryIdAlreadyInUse } from "../errors/category-id-already-in-use.exception.js";

export class CategoryCreateUseCase {
  constructor({ categoryRepository }) {
    this.categoryRepository = categoryRepository;
  }

  async execute(id, name) {
    const categoryId = new UuidVO(id);

    const newCategory = new Category(
      categoryId,
      new NameVO(name)
    );

    // Comprobar si existe id duplicado
    const existingCategoryById = await this.categoryRepository.findById(
      categoryId
    );
    if (existingCategoryById) throw new CategoryIdAlreadyInUse();

    // Persistir el nuevo categoryo
    await this.categoryRepository.create(newCategory);
  }
}
