import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import StudentTable from "../../StudentTable/StudentTable";
import "./Student.css";
import api from "../../../api/api";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      setLoading(true);

      const response = await api.get("/students");

      setStudents(response.data.students);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch students.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteStudent(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      const response = await api.delete(`/students/${id}`);

      alert(response.data.message);

      fetchStudents();
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Delete Failed");
    }
  }

  async function searchStudents(keyword) {
    try {
      if (keyword.trim() === "") {
        fetchStudents();
        return;
      }

      const response = await api.get(
        `/students/search?keyword=${keyword}`
      );

      setStudents(response.data.students);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearch(e) {
    const value = e.target.value;

    setSearch(value);

    searchStudents(value);
  }

  if (loading) {
    return (
      <div className="student-page">
        <h2>Loading Students...</h2>
      </div>
    );
  }

  return (
    <div className="student-page">
      <div className="page-title">
        <h1>Student Management</h1>
        <p>Manage all registered students here.</p>
      </div>

      <div className="student-header">
        <Link to="/register">
          <button className="add-btn">
            + Add New Student
          </button>
        </Link>

        <input
          type="text"
          className="search-bar"
          placeholder="Search Student..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default Students;