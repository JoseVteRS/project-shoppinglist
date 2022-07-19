import { Router } from "express";
import container from "../../container.js";

const router = Router();

const listCreateController = container.resolve("listCreateController");
const listByIdController = container.resolve("listByIdController");
const listGetAllController = container.resolve("listGetAllController");



router.get(
  "/api/lists",
  listGetAllController.execute.bind(listGetAllController)
);

router.post(
  "/api/lists/create",
  listCreateController.execute.bind(listCreateController)
);

router.get(
  "/api/lists/:id",
  listByIdController.execute.bind(listByIdController)
);

export const listRoutes = router;
