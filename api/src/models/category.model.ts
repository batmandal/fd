import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  categoryName: { type: String },
});

export const CategoryModel = model("category", categorySchema);
