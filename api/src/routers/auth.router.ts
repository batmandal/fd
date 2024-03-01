import { Router } from "express";
import { logIn, signUp } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/signUp", signUp).post("/logIn", logIn);

export default authRouter;
