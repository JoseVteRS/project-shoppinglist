import { Router } from "express";
import container from "../../container.js";

const router = Router();

const productCreateController = container.resolve("productCreateController");
const productFindByIdController = container.resolve(
  "productFindByIdController"
);
const productListController = container.resolve("productListController");
const productListGroupedByCategory = container.resolve(
  "productListGroupedByCategory"
);

router.post(
  "/api/product/create",
  productCreateController.execute.bind(productCreateController)
);

router.get(
  "/api/product/:id",
  productFindByIdController.execute.bind(productFindByIdController)
);

router.get(
  "/api/products",
  productListController.execute.bind(productListController)
);

router.get(
  "/api/products/grouped_by_category",
  productListGroupedByCategory.execute.bind(productListGroupedByCategory)
);

export const productRoutes = router;
