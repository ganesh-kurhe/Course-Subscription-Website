import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  subscribeCourse,
  getMyCourses
} from "../controllers/subscriptionController.js";

const router = express.Router();

router.post("/subscribe", auth, subscribeCourse);
router.get("/my-courses", auth, getMyCourses);

export default router;
