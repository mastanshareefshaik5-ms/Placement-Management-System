import express from "express";
import upload from "../middleware/upload.js";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  registerUser,
  loginUser,
  getProfile,
} from "../controllers/authController.js";

const router = express.Router();

// Register
router.post(
  "/register",
  upload.single("profileImage"),
  registerUser
);

// Login
router.post(
  "/login",
  loginUser
);

// Get Logged-in Student Profile
router.get(
  "/profile",
  authMiddleware,
  getProfile
);

export default router;