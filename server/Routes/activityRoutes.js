import express from "express";
import {
  activityController,
  createActivity,
} from "../Controllers/activityController.js";

const activityRouter = express.Router();
activityRouter.get("/", activityController);
activityRouter.post("/create", createActivity);

export { activityRouter };
