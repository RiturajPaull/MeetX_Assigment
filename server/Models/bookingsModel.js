import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  activity: {
    type: mongoose.Schema.ObjectId,
    ref: "Activity",
  },
  bookedAt: {
    type: Date,
    default: Date.now,
  },
});

const BookingModel = mongoose.model("Booking", bookingSchema);
export default BookingModel;
