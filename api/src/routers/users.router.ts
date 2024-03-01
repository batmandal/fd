import { Router } from "express";
import { getAllUsers } from "../controllers";

const userRouter = Router();

userRouter.get("/", getAllUsers);

export default userRouter;
