import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getAllUsers: RequestHandler = async (req, res) => {
  const users = await UserModel.find({});

  res.json(users);
};

export const getUser: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "not found authorization",
    });
  }

  const payload = jwt.verify(authorization, "secret") as JwtPayload;
  const { email } = payload;

  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return res.status(401).json({
      message: "not found user",
    });
  }
  res.json(user);
};
