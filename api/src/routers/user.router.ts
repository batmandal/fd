import { Router } from "express";
import { getUser } from "../controllers";

const findUserRouter = Router();

findUserRouter.get("/getUser", getUser);

export default findUserRouter;
