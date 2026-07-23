import "./Company.css";

function Company() {

    const companies = [

        {
            id:1,
            name:"TCS",
            role:"Software Engineer",
            package:"7 LPA"
        },

        {
            id:2,
            name:"Infosys",
            role:"System Engineer",
            package:"6 LPA"
        },

        {
            id:3,
            name:"Accenture",
            role:"ASE",
            package:"5 LPA"
        },

        {
            id:4,
            name:"Capgemini",
            role:"Analyst",
            package:"4.5 LPA"
        },

        {
            id:5,
            name:"Wipro",
            role:"Project Engineer",
            package:"5 LPA"
        }

    ];

    return(

        <div className="company-page">

            <h1>Company Management</h1>

            <div className="company-grid">

            {

                companies.map(company=>(

                    <div
                    key={company.id}
                    className="company-card">

                        <h2>{company.name}</h2>

                        <p><b>Role:</b> {company.role}</p>

                        <p><b>Package:</b> {company.package}</p>

                        <button>
                            Apply
                        </button>

                    </div>

                ))

            }

            </div>

        </div>

    )

}

export default Company;