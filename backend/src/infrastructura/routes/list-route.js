import { Router } from "express";
import container from "../../container.js";

const router = Router();

const listCreateController = container.resolve("listCreateController");


router.post(
  "/api/list/create",
  listCreateController.execute.bind(listCreateController)
);

export const listRoutes = router;
