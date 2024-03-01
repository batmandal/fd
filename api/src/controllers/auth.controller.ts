import jwt from "jsonwebtoken";
import { RequestHandler } from "express";
import { UserModel } from "../models";

export const signUp: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;
  // const { authorization } = req.headers;
  const user = await UserModel.create({
    name,
    email,
    password,
  });
  return res.json({ user, message: "signed up successfully" });
};

export const logIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({
    email,
    password,
  });

  if (!user) {
    return res.status(401).json({
      message: "email esvel nuuts ug buruu",
    });
  }

  const token = jwt.sign({ email }, "secret");
  return res.json({ token, user, message: "logged In successfully" });
};
