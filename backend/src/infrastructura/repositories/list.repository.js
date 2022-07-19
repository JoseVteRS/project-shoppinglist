import { List } from "../../domain/models/list.model.js";
import { CompletedVO } from "../../domain/value-objects/completed.vo.js";
import { NameVO } from "../../domain/value-objects/name.vo.js";
import { UuidVO } from "../../domain/value-objects/uuid.vo.js";
import { ListSchema } from "../schemas/list-schema.js";

export class ListRepository {
  toDomain(_id, name, status, products) {
    return List(
      new UuidVO(_id),
      new NameVO(name),
      new CompletedVO(status),
      products
    );
  }

  toPersistance(domainList) {
    const { id, name, status, products } = domainList;
    return {
      _id: id.value,
      name: name.value,
      status: status.value,
      products,
    };
  }

  async findById(id) {
    const listFound = await ListSchema.findById(id.value).exec();
    if (!listFound) return null;
    return this.toDomain.apply(listFound);
  }

  async create(domainList) {
    const persitanceCategory = this.toPersistance(domainList);
    const list = new ListSchema(persitanceCategory);
    await list.save();
  }

  async getListById(id) {
    const listById = await ListSchema.findById(id.value)
      .populate({
        path: "products",
        populate: { path: "product", populate: { path: "category" } },
      })
      .lean()
      .exec();
    if (!listById) return null;
    return listById;
  }

  async getLists() {
    const lists = await ListSchema.find()
      .populate({
        path: "products",
        populate: { path: "product", populate: { path: "category" } },
      })
      .lean()
      .exec();
    if (!lists) return null;
    return lists;
  }
}
