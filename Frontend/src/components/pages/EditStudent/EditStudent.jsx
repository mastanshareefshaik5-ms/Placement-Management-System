import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/api";
import "./EditStudent.css";

function EditStudent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [student, setStudent] = useState({
    studentName: "",
    rollNo: "",
    email: "",
    password: "",
    phone: "",
    branch: "",
    cgpa: "",
    year: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStudent();
  }, []);

  async function fetchStudent() {
    try {
      const response = await api.get(`/students/${id}`);

      setStudent(response.data.student);
    } catch (error) {
      console.log(error);
      alert("Student not found");
      navigate("/Students");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleUpdate(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await api.put(`/students/${id}`, student);

      alert(response.data.message);

      navigate("/students");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Update Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="edit-container">

      <h1>Edit Student</h1>

      <form className="edit-form" onSubmit={handleUpdate}>

        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          value={student.studentName}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="rollNo"
          placeholder="Roll Number"
          value={student.rollNo}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={student.password}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={student.phone}
          onChange={handleChange}
          required
        />

        <select
          name="branch"
          value={student.branch}
          onChange={handleChange}
          required
        >
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="CSM">CSM</option>
          <option value="CIVIL">CIVIL</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="IT">IT</option>
          <option value="CSE-AI">CSE-AI</option>
          <option value="CSE-DS">CSE-DS</option>
          <option value="CSE-CS">CSE-CS</option>
        </select>

        <input
          type="number"
          name="cgpa"
          placeholder="CGPA"
          value={student.cgpa}
          onChange={handleChange}
          step="0.01"
          min="0"
          max="10"
          required
        />

        <select
          name="year"
          value={student.year}
          onChange={handleChange}
          required
        >
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>

        <div className="button-group">

          <button className="update-btn" type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update Student"}
          </button>

          <button
            className="cancel-btn"
            type="button"
            onClick={() => navigate("/Students")}
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
}

export default EditStudent;