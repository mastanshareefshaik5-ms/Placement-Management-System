import "./dns-fix.js";
import studentRoutes from "./routes/studentRoutes.js";

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Image Upload Folder
app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"))
);


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);


// Default Route
app.get("/", (req, res) => {
  res.send("Placement Management System API Running");
});


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log(
        `Server running on port ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error);
  });