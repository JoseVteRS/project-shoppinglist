import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: { type: String, _id: false },
  name: { type: String, required: true },
  status: { type: String, enum: ['COMPLETED', 'CANCELLED', 'IN_PROGRESS', 'INIT'], requried: true, default: false },
  products: [
    {
      product: { type: String, required: true, ref: "Product" },
      quantity: { type: Number, required: true, default: 1 },
      _id: { type: String, _id: false },
    },
  ],
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

export const ListSchema = mongoose.model("List", schema);
