import express from "express";
import dotenv from "dotenv";
import connectDb from "./Connect/connectDb.js";
import userRouter from "./Routes/userRoutes.js";
import { activityRouter } from "./Routes/activityRoutes.js";
import bookingRouter from "./Routes/bookingRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, resp) => {
  resp.send("Hello server is Live");
});

app.use("/api/user", userRouter);
app.use("/api/activity", activityRouter);
app.use("/api/booking", bookingRouter);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at PORT:- ${PORT}`);
  });
});
