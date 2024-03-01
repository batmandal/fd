import { RequestHandler } from "express";

import jwt, { JwtPayload } from "jsonwebtoken";

export const authMiddleware: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  try {
    const payload = jwt.verify(authorization, "secret") as JwtPayload;

    // req.params = { payload };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
};
