import ActivityModel from "../Models/activityModel.js";

const activityController = async (req, resp) => {
  try {
    const activities = await ActivityModel.find();
    return resp.json(activities);
  } catch (error) {
    return resp.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const createActivity = async (req, resp) => {
  try {
    const { title, description, location } = req.body;

    if (!title || !description || !location) {
      return resp.status(400).json({
        message: "All the activity fields are mandatory",
        error: true,
        success: false,
      });
    }

    const activityData = {
      title,
      description,
      location,
    };
    const newActivity = await ActivityModel.create(activityData);

    return resp.status(201).json({
      message: "Activity Successfully Created !!",
      error: false,
      success: true,
      data: newActivity,
    });
  } catch (error) {
    return resp.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export { activityController, createActivity };
