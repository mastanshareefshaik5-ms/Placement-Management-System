import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTachometerAlt,
  FaUserGraduate,
  FaBuilding,
  FaChartBar,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <h2>PMS</h2>
        <p>Placement Portal</p>
      </div>

      <ul>

        <li>
          <NavLink to="/Home">
            <FaHome />
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Dashboard">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Students">
            <FaUserGraduate />
            <span>Students</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Companies">
            <FaBuilding />
            <span>Companies</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Reports">
            <FaChartBar />
            <span>Reports</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Settings">
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </li>

      </ul>

      <div className="logout">

        <NavLink to="/Login">
          <FaSignOutAlt />
          <span>Logout</span>
        </NavLink>

      </div>

    </div>
  );
}

export default Sidebar;