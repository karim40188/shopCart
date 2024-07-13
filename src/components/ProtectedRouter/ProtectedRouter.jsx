import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRouter({ children }) {
  if (localStorage.getItem("user") !== null) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRouter;

export function PublicRoute({ children }) {
  if (localStorage.getItem("user") === null) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
}


