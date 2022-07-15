import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config as dotenvconfig } from "dotenv";
import { productRoutes } from "./infrastructura/routes/product-route.js";
import { categoryRoutes } from "./infrastructura/routes/category-route.js";
import { errorMiddleware } from "./infrastructura/middlewares/error.middleware.js";
import { listRoutes } from "./infrastructura/routes/list-route.js";

dotenvconfig();

export const bootstrap = async () => {
  const app = express();
  app.disable("x-powered-by");

  app.use(express.json());
  app.use(cors());

  // Routes
  app.use(productRoutes);
  app.use(categoryRoutes);
  app.use(listRoutes);

  // Middleware
  app.use(errorMiddleware);

  await mongoose.connect(process.env.MONGODB_URI, {
    connectTimeoutMS: 4000,
  });

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  });
};
