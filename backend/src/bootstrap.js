import express from "express";
import mongoose from "mongoose";
import { config as dotenvconfig } from "dotenv";
import {productRoutes} from './infrastructura/routes/product-route.js';

dotenvconfig();

export const bootstrap = async () => {
  const app = express();
  app.disable("x-powered-by");

  app.use(express.json());

  app.use(productRoutes);



  await mongoose.connect(process.env.MONGODB_URI, {
    connectTimeoutMS: 4000,
  });

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  });
};
