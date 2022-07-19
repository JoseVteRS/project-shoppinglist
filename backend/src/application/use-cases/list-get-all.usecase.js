

export class ListGetAllUseCase {
  constructor({ listRepository }) {
    this.listRepository = listRepository;
  }

  async execute() {
    const existingList = await this.listRepository.getLists();
    if (!existingList) throw new Error("List not found");

    // Returno de los productos
    return existingList;
  }
}