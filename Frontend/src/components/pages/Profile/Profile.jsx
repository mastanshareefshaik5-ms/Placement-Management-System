// Frontend/src/pages/Profile/Profile.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../api/api";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const res = await API.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      }
    };

    getProfile();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="profile-loading">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">

        <img
          src={
            user.profilePic
              ? `http://localhost:5000/uploads/${user.profilePic}`
              : "https://via.placeholder.com/150"
          }
          alt="Profile"
          className="profile-image"
        />

        <h2>{user.name}</h2>

        <p><strong>Email:</strong> {user.email}</p>

        <p><strong>Role:</strong> {user.role}</p>

        <p><strong>Roll Number:</strong> {user.rollNumber}</p>

        <p><strong>Branch:</strong> {user.branch}</p>

        <p><strong>Year:</strong> {user.year}</p>

        <p><strong>Phone:</strong> {user.phone}</p>

        <p><strong>CGPA:</strong> {user.cgpa}</p>

        <p><strong>Skills:</strong> {user.skills}</p>

        <button onClick={logout}>
          Logout
        </button>

      </div>
    </div>
  );
};

export default Profile;