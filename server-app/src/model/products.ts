import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true, // Improves search performance
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
      required: true,
      index: true, // Faster category-based queries
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      index: true, // Faster category-based queries
    },
    shelfed: { type: Boolean, required: true, default: true },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

export const productModel = mongoose.model("Products", ProductSchema);
