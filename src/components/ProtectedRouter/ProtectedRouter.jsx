
import "react-router-dom"
function ProtectedRouter({ children }) {
  if (localStorage.getItem("user") !== null) {
    return children;
  } else {
    // eslint-disable-next-line react/jsx-no-undef
    return <Navigator to="/login" />;
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


