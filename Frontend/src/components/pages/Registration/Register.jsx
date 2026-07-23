import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../../api/api";
import "./Register.css";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentName: "",
    rollNo: "",
    email: "",
    password: "",
    phone: "",
    branch: "",
    cgpa: "",
    year: "",
    skills: "",
  });

  const [profileImage, setProfileImage] = useState(null);

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleImage = (e) => {
    setProfileImage(e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });


      // Profile Image Optional
      if (profileImage) {
        data.append("profileImage", profileImage);
      }


      const res = await API.post(
        "/auth/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );


      alert(res.data.message);

      navigate("/login");


    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="register-page">

      <div className="register-card">

        <h2>
          Placement Management System
        </h2>

        <h3>
          Student Registration
        </h3>


        <form onSubmit={handleSubmit}>


          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            required
          />


          <input
            type="text"
            name="rollNo"
            placeholder="Roll Number"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />


          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />


          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />


          <input
            type="text"
            name="branch"
            placeholder="Branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />


          <input
            type="number"
            step="0.01"
            name="cgpa"
            placeholder="CGPA"
            value={formData.cgpa}
            onChange={handleChange}
            required
          />


          <input
            type="number"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
            required
          />


          {/* Optional Skills */}

          <input
            type="text"
            name="skills"
            placeholder="Skills (Optional)"
            value={formData.skills}
            onChange={handleChange}
          />


          {/* Optional Profile Image */}

          <label>
            Profile Image (Optional)
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />


          <button type="submit">
            {loading ? "Registering..." : "Register"}
          </button>


        </form>


        <p>
          Already have an account?
          <Link to="/login">
            Login
          </Link>
        </p>


      </div>

    </div>

  );
};


export default Register;