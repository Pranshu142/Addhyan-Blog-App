import express from "express";
import * as validators from "../middlewares/validator.middleware.js";
import * as userController from "../controllers/user.controllers.js";
import * as auth from "../middlewares/auth.middleware.js";

const route = express.Router();

route.post(
  "/registerUser",
  validators.validateUserRegistration,
  userController.registerUser
);

route.get("/loginUser", validators.validateUserLogin, userController.loginUser);

route.get("/profile", auth.userAuth, userController.getUserProfile);

route.post("/logout", auth.userAuth, userController.userLogut);

export default route;
