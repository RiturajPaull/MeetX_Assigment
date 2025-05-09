import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModel from "../Models/userModel.js";
dotenv.config();

const generateRefreshToken = async (userId) => {
  const refreshToken = jwt.sign(
    { id: userId },
    process.env.SECRET_KEY_REFRESH_TOKEN,
    { expiresIn: "7d" }
  );

  await UserModel.updateOne({ _id: userId }, { refresh_token: refreshToken });
  return refreshToken;
};

export { generateRefreshToken };
