import UserModel from "../Models/userModel.js";
import bcryptjs from "bcryptjs";
import { generateRefreshToken } from "../Utils/generateRefreshToken.js";
import { generateAccessToken } from "../Utils/generateAccessToken.js";
// Registration Controller
const userRegisterController = async (req, resp) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return resp.status(400).json({
        message: "All the fields are mandatory !!",
      });
    }

    const user = await UserModel.findOne({ email });

    if (user) {
      return resp.status(400).json({
        message: "User Already Registered !!",
        error: true,
        success: false,
      });
    }

    // converting the user password into hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const userData = {
      name,
      email,
      phone,
      password: hashedPassword,
    };

    const newUser = await UserModel.create(userData);

    return resp.status(201).json({
      message: "User Successfully Created !!",
      error: false,
      success: true,
    });
  } catch (error) {
    return resp.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const userLoginController = async (req, resp) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return resp.status(400).json({
        message: "Both the firlds are required !!",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return resp.status(400).json({
        message: "User is not registered !! Please register first .",
        error: true,
        success: false,
      });
    }

    //check password given by the user
    const checkPassword = await bcryptjs.compare(password, user.password);

    if (!checkPassword) {
      return resp.status(400).json({
        message: "Invalid Password!!",
        error: true,
        success: false,
      });
    }

    //if password is valid then generate the accestoken and refresh token

    const accessToken = generateAccessToken(user._id);
    const refreshToken = await generateRefreshToken(user._id);

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    resp.cookie("accessToken", accessToken, cookiesOption);
    resp.cookie("refreshToken", refreshToken, cookiesOption);

    return resp.status(201).json({
      message: "Logged in successfully !!",
      error: false,
      success: true,
      token: {
        accessToken,
        refreshToken: String(refreshToken),
      },
    });
  } catch (error) {
    return resp.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export { userRegisterController, userLoginController };
