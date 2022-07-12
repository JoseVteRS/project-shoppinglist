import { Router } from "express";
import container from "../../container.js";
import { ProductFindByIdController } from "../controllers/product-find-by-id.controller.js";

const router = Router();

const productCreateController = container.resolve("productCreateController");
const productFindByIdController = container.resolve(
  "productFindByIdController"
);

router.post(
  "/api/product/create",
  productCreateController.execute.bind(productCreateController)
);

router.get(
  "/api/product/:id",
  productFindByIdController.execute.bind(productFindByIdController)
);

export const productRoutes = router;
