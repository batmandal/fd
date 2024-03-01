import { Router } from "express";

import {
  createCategory,
  getAllCategories,
} from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories).post("/", createCategory);

export default categoryRouter;
