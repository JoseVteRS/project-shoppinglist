import { Router } from "express";
import container from "../../container.js";

const router = Router();

const productCreateController = container.resolve("productCreateController");
const productFindByIdController = container.resolve(
  "productFindByIdController"
);
const productListController = container.resolve("productListController");

router.post(
  "/api/product/create",
  productCreateController.execute.bind(productCreateController)
);

router.get(
  "/api/product/:id",
  productFindByIdController.execute.bind(productFindByIdController)
);

router.get(
  "/api/product",
  productListController.execute.bind(productListController)
);

export const productRoutes = router;
