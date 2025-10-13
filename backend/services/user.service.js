import mongoose from "mongoose";
import User from "../models/user.model.js";

export const findExistingUser = async (identifier, flag = false) => {
  try {
    const query = {
      $or: [{ email: identifier }, { username: identifier }],
    };

    // Only include _id if it's a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(identifier)) {
      query.$or.push({ _id: identifier });
    }

    const user = flag
      ? await User.findOne(query).select("+password")
      : await User.findOne(query);

    return user;
  } catch (error) {
    console.error("Error finding user:", error);
    throw new Error("Database error while finding user");
  }
};

export const createNewUser = async (user) => {
  try {
    const { firstname, lastname, email, password, username, mobileNumber } =
      user;

    const newUser = await User.create({
      fullname: { firstname, lastname },
      email,
      password,
      username,
      mobileNumber,
    });

    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Database error while creating user");
  }
};

export const matchUserPassword = async (existingUser, password) => {
  try {
    
    const comparePassword = await existingUser.comparePassword(password);
    return comparePassword;
  } catch (error) {
    console.error("Error comparing password:", error);
    throw new Error("Database error while  comparing password ");
  }
};

export const generateToken = (user) => {
  try {
    const token = user.generateAuthToken();
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Token generation failed");
  }
};
