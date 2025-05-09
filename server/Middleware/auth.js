import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModel from "../Models/userModel.js";
dotenv.config();

const auth = async (req, resp, next) => {
  try {
    console.log("Requeat", req.cookies);
    const token =
      req.cookies.accessToken || req?.headers?.authorization?.split(" ")[1];

    if (!token) {
      return resp.status(401).json({
        message: "Provide token",
        error: true,
        success: false,
      });
    }

    const decode = await jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

    if (!decode) {
      return resp.status(401).json({
        message: "Unauthorized Access",
        error: true,
        success: false,
      });
    }

    req.userId = await UserModel.findOne({ _id: decode.id });
    next();
  } catch (error) {
    return resp.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export { auth };
