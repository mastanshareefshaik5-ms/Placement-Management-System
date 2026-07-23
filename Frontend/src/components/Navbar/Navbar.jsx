import "./Navbar.css";
import {
FaSearch,
FaBell,
FaUserCircle
} from "react-icons/fa";

function Navbar(){

return(

<nav className="navbar">

<div className="logo">

Placement Management System

</div>

<div className="search-box">

<FaSearch/>

<input
type="text"
placeholder="Search..."
/>

</div>

<div className="navbar-right">

<FaBell className="nav-icon"/>

<div className="profile">

<FaUserCircle className="profile-icon"/>

<div>

<h4>Admin</h4>

<p>Placement Officer</p>

</div>

</div>

</div>

</nav>

)

}

export default Navbar;