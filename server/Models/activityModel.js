import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ActivityModel = mongoose.model("Activity", activitySchema);

export default ActivityModel;
