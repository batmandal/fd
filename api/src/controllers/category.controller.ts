import { RequestHandler } from "express";
import { CategoryModel } from "../models/category.model";

export const getAllCategories: RequestHandler = async (req, res) => {
  const categories = await CategoryModel.find({});

  res.json(categories);
};

export const createCategory: RequestHandler = async (req, res) => {
  const { categoryName } = req.body;
  const category = await CategoryModel.create({
    categoryName,
  });
  res.json({ category, message: "added category is successfully" });
};
