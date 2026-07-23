import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

router.get("/", async (req, res) => {

    try {

        const students = await Student.find();

        res.status(200).json({
            success: true,
            students,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

});
router.get("/search", async (req, res) => {

    try {

        const keyword = req.query.keyword;

        const students = await Student.find({
            $or: [
                {
                    studentName: {
                        $regex: keyword,
                        $options: "i",
                    },
                },
                {
                    rollNo: {
                        $regex: keyword,
                        $options: "i",
                    },
                },
            ],
        });

        res.status(200).json({
            success: true,
            students,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

});
router.get("/:id", async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        if (!student) {

            return res.status(404).json({
                success: false,
                message: "Student not found",
            });

        }

        res.status(200).json({
            success: true,
            student,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

});
router.put("/:id", async (req, res) => {

    try {

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedStudent) {

            return res.status(404).json({
                success: false,
                message: "Student not found",
            });

        }

        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            student: updatedStudent,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

});
router.delete("/:id", async (req, res) => {

    try {

        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {

            return res.status(404).json({
                success: false,
                message: "Student not found",
            });

        }

        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

});


export default router;