import { List } from "../../domain/models/list.model.js";
import { CompletedVO } from "../../domain/value-objects/completed.vo.js";
import { NameVO } from "../../domain/value-objects/name.vo.js";
import { UuidVO } from "../../domain/value-objects/uuid.vo.js";


export  class ListCreateUseCase {
    constructor({listRepository}) {
        this.listRepository = listRepository;
    }

    async execute(id, name, status, products) {
        const listId = new UuidVO(id);

        const newList = new List(
            listId,
            new NameVO(name),
            new CompletedVO(status),
            products
        );

        const existingListById = await this.listRepository.findById(
            listId
        );
        if(existingListById) throw new Error("Category already exists");

        console.log({newList})

        await this.listRepository.create(newList);
    }
}