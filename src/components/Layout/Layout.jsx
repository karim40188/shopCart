import React from "react";
import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";
import { Outlet } from "react-router-dom";
// import { Offline, Online } from "react-detect-offline";

function Layout() {
  return (
    <>
      <Navbar />
      {/* <div>
        <Offline>
          <div className="network">
            <i className="fas fa-wifi"></i>Only shown offline (surprise!)
          </div>
        </Offline>
      </div> */}

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
