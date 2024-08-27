import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
// import { Offline, Online } from "react-detect-offline";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
