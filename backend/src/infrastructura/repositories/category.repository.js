import { Category } from "../../domain/models/category.model.js";
import { NameVO } from "../../domain/value-objects/name.vo.js";
import { NoteVO } from "../../domain/value-objects/note.vo.js";
import { UuidVO } from "../../domain/value-objects/uuid.vo.js";
import { CategorySchema } from "../schemas/category-schema.js";

export class CategoryRepository {
  toDomain(_id, name) {
    return Category(new UuidVO(_id), new NameVO(name));
  }

  toPersistance(domainCategory) {
    const { id, name } = domainCategory;
    return {
      _id: id.value,
      name: name.value
    };
  }

  /**
   * Finds a category by id
   * @param {String} id Category id
   * @returns Domain category
   */
  async findById(id) {
    const categoryFound = await CategorySchema.findById(id.value).exec();
    if (!categoryFound) return null;
    return this.toDomain(categoryFound);
  }

  /**
   * Persists a new Category
   * @param {CategoryModel} domainCategory Domain category
   */
  async create(domainCategory) {
    const persistanceCategory = this.toPersistance(domainCategory);
    const category = new CategorySchema(persistanceCategory);
    await category.save();
  }
}
