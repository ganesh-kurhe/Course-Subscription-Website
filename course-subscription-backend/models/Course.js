import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number, // 0 = Free
  image: String
});

export default mongoose.model("Course", courseSchema);
