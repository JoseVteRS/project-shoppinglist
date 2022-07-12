import {Router} from "express";
import container from "../../container.js";

const router = Router();

const productCreateController = container.resolve('productCreateController');

router.post(
  "/api/product/create",
  productCreateController.execute.bind(productCreateController)
);

export const productRoutes = router;