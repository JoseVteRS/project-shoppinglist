import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: { type: String, _id: false },
  name: { type: String, required: true },
  produts: { type: [String], required: true },
});

export const ListSchema = mongoose.model("List", schema);
