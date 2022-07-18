import { List } from "../../domain/models/list.model.js";
import { CompletedVO } from "../../domain/value-objects/completed.vo.js";
import { NameVO } from "../../domain/value-objects/name.vo.js";
import { UuidVO } from "../../domain/value-objects/uuid.vo.js";
import { ListSchema } from "../schemas/list-schema.js";

export class ListRepository {
  toDomain(_id, name, completed, produts) {
    return List(
      new UuidVO(_id),
      new NameVO(name),
      new CompletedVO(completed),
      produts
    );
  }

  toPersistance(domainList) {
    const { id, name, completed, produts } = domainList;
    return {
      _id: id.value,
      name: name.value,
      completed: completed.value,
      produts,
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
    const listById = await ListSchema.findById(id.value).lean().exec();
    if (!categoryById) return null;
    return listById;
  }

  async getLists() {
    const lists = await ListSchema.find().lean().exec();
    if (!lists) return null;
    return lists;
  }
}
