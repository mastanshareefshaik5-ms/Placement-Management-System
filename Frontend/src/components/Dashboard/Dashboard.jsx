import "./Dashboard.css";
import {
FaUserGraduate,
FaBuilding,
FaBriefcase,
FaChartLine
} from "react-icons/fa";

function Dashboard(){

const cards=[

{
title:"Students",
count:250,
icon:<FaUserGraduate/>
},

{
title:"Companies",
count:35,
icon:<FaBuilding/>
},

{
title:"Placed",
count:170,
icon:<FaBriefcase/>
},

{
title:"Placement %",
count:"92%",
icon:<FaChartLine/>
}

];

return(

<div className="dashboard">

<h1>Dashboard</h1>

<div className="cards">

{

cards.map((card,index)=>(

<div
className="card"
key={index}
>

<div className="card-icon">

{card.icon}

</div>

<h2>{card.count}</h2>

<p>{card.title}</p>

</div>

))

}

</div>

<div className="dashboard-bottom">

<div className="recent">

<h2>Recent Placements</h2>

<table>

<thead>

<tr>

<th>Name</th>

<th>Company</th>

<th>Package</th>

</tr>

</thead>

<tbody>

<tr>

<td>Rahul</td>

<td>TCS</td>

<td>7 LPA</td>

</tr>

<tr>

<td>Anjali</td>

<td>Infosys</td>

<td>6 LPA</td>

</tr>

<tr>

<td>Ravi</td>

<td>Accenture</td>

<td>5 LPA</td>

</tr>

<tr>

<td>Sneha</td>

<td>Capgemini</td>

<td>5.5 LPA</td>

</tr>

</tbody>

</table>

</div>

<div className="quick-actions">

<h2>Quick Actions</h2>

<button>Add Student</button>

<button>Add Company</button>

<button>Generate Report</button>

<button>View Placements</button>

</div>

</div>

</div>

)

}

export default Dashboard;