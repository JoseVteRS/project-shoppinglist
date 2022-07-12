import mongoose from "mongoose";


const schema = new mongoose.Schema({
  _id: { type: String, _id: false },
  name: {type: String, require: true},
  note: {type: String, require: false}
});

export const ProductSchema = mongoose.model("Product", schema);