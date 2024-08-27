
import { Navigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function ProtectedRouter({ children }) {
  if (localStorage.getItem("user") !== null) {
    return children;
  } else {
    // eslint-disable-next-line react/jsx-no-undef
    return <Navigate to="/login" />;
  }
}

export default ProtectedRouter;

// eslint-disable-next-line react/prop-types
export function PublicRoute({ children }) {
  if (localStorage.getItem("user") === null) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
}


