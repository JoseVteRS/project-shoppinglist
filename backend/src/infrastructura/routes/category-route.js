import { Router } from "express";
import container from "../../container.js";

const router = Router();

const categoryCreateController = container.resolve("categoryCreateController");
const categoryByIdController = container.resolve("categoryByIdController");
const categoryListController = container.resolve("categoryListController");

router.post(
  "/api/category/create",
  categoryCreateController.execute.bind(categoryCreateController)
);

router.get(
  "/api/categories",
  categoryListController.execute.bind(categoryListController)
);

router.get(
  "/api/category/:id",
  categoryByIdController.execute.bind(categoryByIdController)
);



export const categoryRoutes = router;
