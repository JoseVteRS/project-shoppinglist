

export class CategoryListUseCase {

    constructor({categoryRepository}) {
        this.categoryRepository = categoryRepository
    }

    async execute() {
        const existingCategories = await this.categoryRepository.getCategories();
         if (!existingCategories) throw new Error("Categories not found");

         // Returno de los productos
         return existingCategories;
    }
}