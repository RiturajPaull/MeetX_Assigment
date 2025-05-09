import express from "express";
import { auth } from "../Middleware/auth.js";
import { bookActivity, getBooking } from "../Controllers/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.get("/", auth, getBooking);
bookingRouter.post("/post", auth, bookActivity);

export default bookingRouter;
