import { Product } from "../../domain/models/product.model.js";
import { NameVO } from "../../domain/value-objects/name.vo.js";
import { NoteVO } from "../../domain/value-objects/note.vo.js";
import { UuidVO } from "../../domain/value-objects/uuid.vo.js";
import { ProductSchema } from "../schemas/product-schema.js";

export class ProductRepository {
  toDomain(_id, name, note, category) {
    return Product(
      new UuidVO(_id),
      new NameVO(name),
      new NoteVO(note),
      new UuidVO(category)
    );
  }

  toPersistance(domainProduct) {
    const { id, name, note, category } = domainProduct;
    return {
      _id: id.value,
      name: name.value,
      note: note.value,
      category: category.value,
    };
  }

  async findById(id) {
    const productFound = await ProductSchema.findById(id.value).exec();
    if (!productFound) return null;
    return this.toDomain(productFound);
  }

  async create(domainProduct) {
    const persistanceProduct = this.toPersistance(domainProduct);
    const product = new ProductSchema(persistanceProduct);
    await product.save();
  }

  async getProductById(id) {
    const productById = await ProductSchema.findById(id.value)
      .populate("category", "_id, name")
      .lean()
      .exec();
    if (!productById) return null;
    return productById;
  }

  //TODO: Implementar sistema de paginación
  async getProducts() {
    const allProducts = await ProductSchema.find()
      .populate("category", "_id, name")
      .lean()
      .exec();
    if (!allProducts) return null;
    return allProducts;
  }

  async getProductGroupedByCategory() {
    const aggregatePipeline = [
      {
        $group: {
          _id:  "$category",
          count: { $sum: 1 },
          docs: { $push: "$$ROOT" },
        },
      },
    ];

   const allProducts = await ProductSchema.aggregate(aggregatePipeline);
    if (!allProducts) return null;
    return allProducts;
  }
}
