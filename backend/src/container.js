import awilix from "awilix";
import { ProductCreateUseCase } from "./application/use-cases/product-create.usecase.js";
import { ProductCreateController } from "./infrastructura/controllers/product-create.controller.js";
import { ProductRepository } from "./infrastructura/repositories/procut.repository.js";

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

// Use Cases
container.register({
  productCreateUseCase: awilix.asClass(ProductCreateUseCase).singleton(),
});

// Controllers
container.register({
  productCreateController: awilix.asClass(ProductCreateController).singleton(),
});

// Repositories
container.register({
  productRepository: awilix.asClass(ProductRepository).singleton(),
});

export default container;
