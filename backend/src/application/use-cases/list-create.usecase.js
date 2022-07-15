import { List } from "../../domain/models/list.model.js";
import { NameVO } from "../../domain/value-objects/name.vo.js";
import { UuidVO } from "../../domain/value-objects/uuid.vo.js";


export  class ListCreateUseCase {
    constructor({listRepository}) {
        this.listRepository = listRepository;
    }

    async execute(id, name, produts) {
        const listId = new UuidVO(id);

        const newList = new List(
            listId,
            new NameVO(name),
            produts
        );

        const existingListById = await this.listRepository.findById(
            listId
        );
        if(existingListById) throw new Error("Category already exists");

        await this.listRepository.create(newList);
    }
}