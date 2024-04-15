import React from "react";
import { Link } from "react-router-dom";
import { Person, PersonAdd } from "react-bootstrap-icons";

function Navbar() {
  return (
    <div id="mean-section">
      <div
        id="navbar-section"
        className="navbar navbar-expand-lg p-3"
        style={{ position: "fixed", top: "0px", zIndex: "1" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-theme="dark"
                >
                  India
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-transpar"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item " to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex flex-end">
              <button className="btn btn-outline-info ">
                <span>
                  <Person size={33} />
                </span>
                Login
              </button>
              <button className="btn btn-outline-success ms-2">
                <span>
                  <PersonAdd size={33} />
                </span>
                Signin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// {/* <div className="container mt-5">
//         <div
//           className="card p-3"
//           style={{ borderRadius: "50px", height: "80px" }}
//         >
//           <div className="row input-group">
//             <div className="col-6">
//               <input type="text" className="form-control p-2" />
//             </div>
//             <div className="col-6">
//               <input type="date" className="form-control p-2" />
//             </div>
//           </div>
//         </div>
//       </div> */}
