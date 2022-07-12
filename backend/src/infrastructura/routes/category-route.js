import { Router } from "express";
import container from "../../container.js";

const router = Router();

const categoryCreateController = container.resolve("categoryCreateController");

router.post(
  "/api/category/create",
  categoryCreateController.execute.bind(categoryCreateController)
);

export const categoryRoutes = router;
