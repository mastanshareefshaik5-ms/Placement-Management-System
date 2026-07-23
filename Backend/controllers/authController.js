import Student from "../models/Student.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
  try {
    const {
      studentName,
      rollNo,
      email,
      password,
      phone,
      branch,
      cgpa,
      year,
    } = req.body;

    if (
      !studentName ||
      !rollNo ||
      !email ||
      !password ||
      !phone ||
      !branch ||
      !cgpa ||
      !year
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const existingEmail = await Student.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const existingRoll = await Student.findOne({ rollNo });

    if (existingRoll) {
      return res.status(400).json({
        success: false,
        message: "Roll Number already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let profileImage = "default.png";

    if (req.file) {
      profileImage = req.file.filename;
    }

    const student = await Student.create({
      studentName,
      rollNo,
      email,
      password: hashedPassword,
      phone,
      branch,
      cgpa,
      year,
      profileImage,
    });

    res.status(201).json({
      success: true,
      message: "Registration Successful",
      student,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter Email and Password",
      });
    }

    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    student.lastLogin = new Date();
    await student.save();

    // Generate JWT Token
    const token = jwt.sign(
      { id: student._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      student: {
        _id: student._id,
        studentName: student.studentName,
        rollNo: student.rollNo,
        email: student.email,
        phone: student.phone,
        branch: student.branch,
        cgpa: student.cgpa,
        year: student.year,
        profileImage: student.profileImage,
        lastLogin: student.lastLogin,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.user._id).select("-password");

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json(student);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};