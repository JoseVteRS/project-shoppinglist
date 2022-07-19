import { UuidVO } from "../../domain/value-objects/uuid.vo.js";

export class ListByIdUseCase {
  constructor({ listRepository }) {
    this.listRepository = listRepository;
  }

  async execute(id) {
    const listId = new UuidVO(id);

    // Comprobar si existe id
    const existingListById = await this.listRepository.getListById(
      listId
    );
    if (!existingListById) throw new Error("List not found");

    // Returno del listo por ID
    return existingListById;
  }
}
