import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserToken } from "../Context/Context";

import logo from "../../assets/freshcart-logo.svg";
function Navbar() {
  let navigate = useNavigate();
  let { token, setToken } = useContext(UserToken);

  function logOut() {
    localStorage.removeItem("user");
    navigate("/login");
    setToken(null);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="w-100" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            {token !== null ? (
              <ul className="list-unstyled d-flex navbar-nav gap-3 ">
                <li>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/cart">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/categories">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/brands">
                    Brands
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fab fa-tiktok"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </li>

              {token == null ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={logOut}>
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
