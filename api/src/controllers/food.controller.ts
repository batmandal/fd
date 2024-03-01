// import { FoodModel } from './../models/food.model';
import { RequestHandler } from "express";
import { FoodModel } from "../models";

export const getAllFoods: RequestHandler = async (req, res) => {
  const foods = await FoodModel.find({});

  res.json(foods);
};
export const createFood: RequestHandler = async (req, res) => {
  const { name, categoryName, ingredient, price, onSale, saled, image } =
    req.body;
  const food = await FoodModel.create({
    name,
    categoryName,
    ingredient,
    price,
    onSale,
    saled,
    image,
  });
  res.json({ food, message: "created food successfully" });
};
