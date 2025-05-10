import express from "express";
import {
  userLoginController,
  userRegisterController,
} from "../Controllers/userController.js";
import validate from "../Middleware/validate.js";
import registerSchema from "../Validation/authValidation.js";

const userRouter = express.Router();

userRouter.post("/register", validate(registerSchema), userRegisterController);
userRouter.post("/login", userLoginController);

export default userRouter;
