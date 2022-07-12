import awilix from "awilix";
import { ProductCreateUseCase } from "./application/use-cases/product-create.usecase.js";
import { ProductCreateController } from "./infrastructura/controllers/product-create.controller.js";
import { ProductRepository } from "./infrastructura/repositories/procut.repository.js";
import { CategoryCreateUseCase } from "./application/use-cases/category-create.usecase.js";
import { CategoryCreateController } from "./infrastructura/controllers/category-create.controller.js";
import { CategoryRepository } from "./infrastructura/repositories/category.repository.js";

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

// Use Cases
container.register({
  productCreateUseCase: awilix.asClass(ProductCreateUseCase).singleton(),
  categoryCreateUseCase: awilix.asClass(CategoryCreateUseCase).singleton(),
});

// Controllers
container.register({
  productCreateController: awilix.asClass(ProductCreateController).singleton(),
  categoryCreateController: awilix
    .asClass(CategoryCreateController)
    .singleton(),
});

// Repositories
container.register({
  productRepository: awilix.asClass(ProductRepository).singleton(),
  categoryRepository: awilix.asClass(CategoryRepository).singleton(),
});

export default container;
