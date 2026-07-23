import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">

      {/* Navbar */}
      <Navbar />

      {/* Main Body */}
      <div className="layout-body">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="main-content">
          <Outlet />
        </main>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Layout;