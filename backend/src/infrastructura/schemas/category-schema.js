import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: { type: String, _id: false },
  name: { type: String, require: true },
});

export const CategorySchema = mongoose.model("Category", schema);
