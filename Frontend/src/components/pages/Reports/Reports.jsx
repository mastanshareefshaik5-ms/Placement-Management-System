import "./Reports.css";

function Reports(){

const reports=[

{
title:"Registered Students",
value:250,
color:"#0f3d91"
},

{
title:"Placed Students",
value:170,
color:"#16a34a"
},

{
title:"Pending Students",
value:80,
color:"#dc2626"
},

{
title:"Companies Visited",
value:35,
color:"#ea580c"
}

];

return(

<div className="reports">

<h1>Placement Reports</h1>

<div className="report-grid">

{

reports.map((report,index)=>(

<div
key={index}
className="report-card"
style={{borderTop:`6px solid ${report.color}`}}
>

<h2>{report.value}</h2>

<p>{report.title}</p>

</div>

))

}

</div>

</div>

)

}

export default Reports;