import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
      trim: true,
    },

    rollNo: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    branch: {
      type: String,
      required: true,
    },

    cgpa: {
      type: Number,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    profileImage: {
      type: String,
      default: "default.png",
    },

    lastLogin: {
      type: Date,
      default: null,
    },

    role: {
      type: String,
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model(
  "Student",
  studentSchema
);

export default Student;