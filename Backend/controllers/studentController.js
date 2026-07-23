import Student from "../models/Student.js";

// Get All Students
export async function getStudents(req, res) {
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
}

// Get Student By Id
export async function getStudentsById(req, res) {
  try {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit); 
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
}

// Add Student
export async function addStudent(req, res) {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      success: true,
      message: "Student Registered Successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// Update Student
export async function updateStudent(req, res) {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student Updated Successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// Delete Student
export async function deleteStudent(req, res) {
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
      message: "Student Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
export async function searchStudents(req, res) {
  try {
    const keyword = req.query.keyword || "";

    const students = await Student.find({
      $or: [
        {
          studentName: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          email: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          phone: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          branch: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          rollNo: Number(keyword) || 0,
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
}