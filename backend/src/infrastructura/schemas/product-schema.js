import mongoose from "mongoose";


const schema = new mongoose.Schema({
  _id: { type: String, _id: false },
  name: {type: String, require: true},
  note: {type: String, require: false},
  category: {type: String, required: true, ref: "Category" }
});

export const ProductSchema = mongoose.model("Product", schema);