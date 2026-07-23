import "./Home.css";
import { FaUserGraduate, FaBuilding, FaBriefcase, FaChartLine } from "react-icons/fa";

function Home(){

return(

<div className="home">

<div className="welcome-card">

<h1>Welcome to Placement Management System</h1>

<p>

Manage students, companies and placements from one dashboard.

</p>

</div>

<div className="home-grid">

<div className="home-card">

<FaUserGraduate className="icon"/>

<h2>Students</h2>

<h1>250+</h1>

</div>

<div className="home-card">

<FaBuilding className="icon"/>

<h2>Companies</h2>

<h1>35+</h1>

</div>

<div className="home-card">

<FaBriefcase className="icon"/>

<h2>Placements</h2>

<h1>170+</h1>

</div>

<div className="home-card">

<FaChartLine className="icon"/>

<h2>Success Rate</h2>

<h1>92%</h1>

</div>

</div>

</div>

)

}

export default Home;