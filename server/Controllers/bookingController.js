import BookingModel from "../Models/bookingsModel.js";

const bookActivity = async (req, resp) => {
  try {
    const { activity } = req.body;
    const userId = req.userId;
    // const booking = new BookingModel({
    //   user: req.userId,
    //   activity: activity,
    // });
    // await booking.save();
    const data = {
      user: userId,
      activity: activity,
    };

    const booking = await BookingModel.create(data);
    return resp.status(201).json({
      message: "Booking is successfull",
      error: false,
      success: true,
      data: booking,
    });
  } catch (error) {
    return resp.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const getBooking = async (req, resp) => {
  try {
    const bookings = await BookingModel.find({ user: req.userId })
      .populate("activity")
      .populate("user", "name email");
    return resp.status(200).json({
      message: "Displaying the booking list",
      error: false,
      success: true,
      data: bookings,
    });
  } catch (error) {
    return resp.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export { bookActivity, getBooking };
