import { Link } from "react-router-dom";
import "./StudentTable.css";

function StudentTable({ students, deleteStudent }) {
  return (
    <>
      {students.length === 0 ? (
        <h3 className="no-data">No Students Found</h3>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Student Name</th>
              <th>Roll No</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Branch</th>
              <th>CGPA</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student._id}>
                <td>{index + 1}</td>
                <td>{student.studentName}</td>
                <td>{student.rollNo}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.branch}</td>
                <td>{student.cgpa}</td>
                <td>{student.year}</td>

                <td className="action-buttons">

                  <Link to={`/students/${student._id}`}>
                    <button className="view-btn">
                      View
                    </button>
                  </Link>

                  <Link to={`/students/edit/${student._id}`}>
                    <button className="edit-btn">
                      Edit
                    </button>
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(student._id)}
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default StudentTable;