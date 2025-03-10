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
    quantity: {
      available: {
        type: Number,
        default: 0,
        min: 0, // Prevents negative values
      },
      sold: {
        type: Number,
        default: 0,
        min: 0, // Prevents negative values
      },
    },
    unitPrice: {
      price: {
        type: Number,
        required: true,
        default: 1,
        min: 0, // Prevents negative prices
      },
      currency: {
        type: String,
        enum: ["USD", "PKR", "EUR"], // Restrict to valid currencies
        default: "USD",
      },
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
    variants: [
      {
        colors: [String], // Supports multiple color options
        dimensions: {
          length: { type: Number, default: 1, min: 0 },
          width: { type: Number, default: 1, min: 0 },
          height: { type: Number, default: 1, min: 0 },
          unit: {
            type: String,
            enum: ['mm', 'cm', 'm'],
            default: "cm"
          },
        },
        weight: {
          value: { type: Number, default: 1, min: 0 },
          unit: {
            type: String,
            enum: ['g', 'kg', 'pounds', 'l', 'ml'],
            default: "kg"
          },
        },
        sizes: {
          type: String,
          enum: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
        },
      },
    ],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

export const productModel = mongoose.model("Products", ProductSchema);
