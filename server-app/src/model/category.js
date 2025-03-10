import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
});

export const categoryModel = mongoose.model("Category", CategorySchema);
