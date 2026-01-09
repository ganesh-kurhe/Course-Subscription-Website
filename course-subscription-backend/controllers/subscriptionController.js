import Course from "../models/Course.js";
import Subscription from "../models/Subscription.js";

export const subscribeCourse = async (req, res) => {
  const { courseId, promoCode } = req.body;

  const course = await Course.findById(courseId);
  if (!course)
    return res.status(404).json({ message: "Course not found" });

  let pricePaid = course.price;

  if (course.price > 0) {
    if (promoCode !== "BFSALE25") {
      return res.status(400).json({ message: "Invalid promo code" });
    }
    pricePaid = course.price * 0.5;
  }

  const subscription = await Subscription.create({
    userId: req.userId,
    courseId,
    pricePaid
  });

  res.json({
    message: "Subscribed successfully",
    subscription
  });
};

export const getMyCourses = async (req, res) => {
  const subscriptions = await Subscription.find({
    userId: req.userId
  }).populate("courseId");

  res.json(subscriptions);
};
