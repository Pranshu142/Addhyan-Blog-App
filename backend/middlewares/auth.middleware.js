import * as userService from "../services/user.service.js";
import jwt from "jsonwebtoken";

export const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorizaton?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Invalid authorization" });
    }

    const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
    const currentUser = await userService.findExistingUser(decodedValue._id);
    req.user = currentUser;
    return next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
