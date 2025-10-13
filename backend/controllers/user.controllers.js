import { validationResult } from "express-validator";
import * as userServices from "../services/user.service.js";

export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, username, mobileNumber } = req.body;

  const existingUser = await userServices.findExistingUser(email);
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  try {
    const newUser = await userServices.createNewUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      username,
      password,
      email,
      mobileNumber,
    });

    const token = await userServices.generateToken(newUser);
    res.cookie("token", token);
    res.status(200).json({ newUser, token });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

export const loginUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password, username } = req.body;

  try {
    const existingUser = await userServices.findExistingUser(
      email || username,
      true
    );

    if (!existingUser) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const matchPassword = userServices.matchUserPassword(
      existingUser,
      password
    );

    if (!matchPassword) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const token = userServices.generateToken(existingUser);
    res.cookie("token", token);

    res.status(200).json({ existingUser, token });
  } catch (error) {
    console.error("Error login user:", error);
    res.status(500).json({ error: "Failed to login user" });
  }
};

export const getUserProfile = async (req, res) => {
  return res
    .status(200)
    .json({ message: "showing user profile", user: req.user });
};

export const userLogut = async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization.split()[1];
    if (!token) {
      return res.status(401).json({ error: "Invalid authorization" });
    }

    res.clearCookie("token");
    return res.status(200).json({ message: "user logout successfully" });
  } catch (error) {
    console.error("Error logout user:", error);
    res.status(500).json({ error: "Failed to logout user" });
  }
};
