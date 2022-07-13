import awilix from "awilix";
import { ProductCreateUseCase } from "./application/use-cases/product-create.usecase.js";
import { ProductCreateController } from "./infrastructura/controllers/product-create.controller.js";
import { ProductRepository } from "./infrastructura/repositories/product.repository.js";
import { CategoryCreateUseCase } from "./application/use-cases/category-create.usecase.js";
import { CategoryCreateController } from "./infrastructura/controllers/category-create.controller.js";
import { CategoryRepository } from "./infrastructura/repositories/category.repository.js";
import { ProductFindByIdUseCase } from "./application/use-cases/product-find-by-id.usecase.js";
import { ProductFindByIdController } from "./infrastructura/controllers/product-find-by-id.controller.js";
import { ProductListUseCase } from "./application/use-cases/product-list.usecase.js";
import { ProductListController } from "./infrastructura/controllers/product-list.controller.js";
import { ProductListGroupedByCategoryUseCase } from "./application/use-cases/product-list-grouped-by-category.usecase.js";
import { ProductListGroupedByCategoryController } from "./infrastructura/controllers/product-list-grouped-by-category.controller.js";
import { CategoryFindByIdUseCase } from "./application/use-cases/category-by-id.usecase.js";
import { CategoryFindByIdController } from "./infrastructura/controllers/category-by-id.controller.js";
import { CategoryListUseCase } from "./application/use-cases/category-list.usecase.js";
import { CategoryListController } from "./infrastructura/controllers/category-list.controller.js";

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

// Use Cases
container.register({
  productCreateUseCase: awilix.asClass(ProductCreateUseCase).singleton(),
  productFindByIdUseCase: awilix.asClass(ProductFindByIdUseCase).singleton(),
  productListUseCase: awilix.asClass(ProductListUseCase).singleton(),
  productListGroupedByCategoryUseCase: awilix
    .asClass(ProductListGroupedByCategoryUseCase)
    .singleton(),
  categoryCreateUseCase: awilix.asClass(CategoryCreateUseCase).singleton(),
  categoryFindByIdUseCase: awilix.asClass(CategoryFindByIdUseCase).singleton(),
  categoryListUseCase: awilix.asClass(CategoryListUseCase).singleton(),
});

// Controllers
container.register({
  productCreateController: awilix.asClass(ProductCreateController).singleton(),
  productFindByIdController: awilix
    .asClass(ProductFindByIdController)
    .singleton(),
  productListController: awilix.asClass(ProductListController).singleton(),
  productListGroupedByCategory: awilix
    .asClass(ProductListGroupedByCategoryController)
    .singleton(),
  categoryCreateController: awilix
    .asClass(CategoryCreateController)
    .singleton(),
  categoryByIdController: awilix
    .asClass(CategoryFindByIdController)
    .singleton(),
  categoryListController: awilix.asClass(CategoryListController).singleton(),
});

// Repositories
container.register({
  productRepository: awilix.asClass(ProductRepository).singleton(),
  categoryRepository: awilix.asClass(CategoryRepository).singleton(),
});

export default container;
