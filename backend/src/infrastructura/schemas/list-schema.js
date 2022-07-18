import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: { type: String, _id: false },
  name: { type: String, required: true },
  completed: { type: Boolean, requried: true, default: false },
  produts: [
    {
      product: { type: String, required: true, ref: "Product" },
      quantity: { type: Number, required: true, default: 1 },
      _id: { type: String, _id: false },
    },
  ],
});

export const ListSchema = mongoose.model("List", schema);
