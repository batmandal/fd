import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: { type: String, required: true },
  categoryName: { type: String, required: true },
  ingredient: { type: String, required: true },
  price: { type: Number, required: true },
  onSale: { type: Boolean, required: false, default: false },
  saled: { type: Number, required: false },
  image: { type: String, required: true },
  discount: { type: Number, required: false, default: 0 },
});

export const FoodModel = model("food", foodSchema);
