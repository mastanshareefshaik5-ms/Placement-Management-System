import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";
import "./StudentDetails.css";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

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
      navigate("/students");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <div className="details-container">

      <h1>Student Details</h1>

      <div className="details-card">

        <div className="detail-item">
          <span>Name</span>
          <p>{student.studentName}</p>
        </div>

        <div className="detail-item">
          <span>Roll Number</span>
          <p>{student.rollNo}</p>
        </div>

        <div className="detail-item">
          <span>Email</span>
          <p>{student.email}</p>
        </div>

        <div className="detail-item">
          <span>Phone</span>
          <p>{student.phone}</p>
        </div>

        <div className="detail-item">
          <span>Branch</span>
          <p>{student.branch}</p>
        </div>

        <div className="detail-item">
          <span>CGPA</span>
          <p>{student.cgpa}</p>
        </div>

        <div className="detail-item">
          <span>Year</span>
          <p>{student.year}</p>
        </div>

        <div className="detail-item">
          <span>Registered On</span>
          <p>{new Date(student.createdAt).toLocaleString()}</p>
        </div>

      </div>

      <button
        className="back-btn"
        onClick={() => navigate("/students")}
      >
        Back
      </button>

    </div>
  );
}

export default StudentDetails;