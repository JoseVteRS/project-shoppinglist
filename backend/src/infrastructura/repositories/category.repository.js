import { Category } from "../../domain/models/category.model.js";
import { NameVO } from "../../domain/value-objects/name.vo.js";
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
      name: name.value,
    };
  }

  async findById(id) {
    const categoryFound = await CategorySchema.findById(id.value).exec();
    if (!categoryFound) return null;
    return this.toDomain(categoryFound);
  }

  async create(domainCategory) {
    const persistanceCategory = this.toPersistance(domainCategory);
    const category = new CategorySchema(persistanceCategory);
    await category.save();
  }

  async getListById(id) {
    const listById = await ListSchema.findById(id.value)
      .populate("product")
      .lean()
      .exec();
    if (!listById) return null;
    return listById;
  }

  async getCategories() {
    const categories = await CategorySchema.find().lean().exec();
    if (!categories) return null;
    return categories;
  }
}
