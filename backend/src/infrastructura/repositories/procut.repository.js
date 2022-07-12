import { Product } from "../../domain/models/product.model.js";
import { NameVO } from "../../domain/value-objects/name.vo.js";
import { UuidVO } from "../../domain/value-objects/uuid.vo.js";
import { ProductSchema } from "../schemas/product-schema.js";

export class ProductRepository {
  toDomain(_id, name) {
    return Product(new UuidVO(_id), new NameVO(name));
  }

  toPersistance(domainUser) {
    const { id, name } = domainUser;
    return {
      _id: id.value,
      name: name.value,
    };
  }

  /**
   * Finds a product by id
   * @param {String} id Product id
   * @returns Domain product
   */
  async findById(id) {
    const productFound = await ProductSchema.findById(id.value).exec();
    if (!productFound) return null;
    return this.toDomain(productFound);
  }

  /**
   * Persists a new Product
   * @param {ProductModel} domainUser Domain product
   */
  async create(domainUser) {
    const persistanceProduct = this.toPersistance(domainUser);
    const product = new ProductSchema(persistanceProduct);
    await product.save();
  }

  
}
