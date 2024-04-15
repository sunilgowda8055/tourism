import React from "react";
import {
  HouseDoor,
  FileEarmark,
  Cart4,
  People,
  BarChartLine,
  Stack,
  PlusCircle,
  FileEarmarkText,
} from "react-bootstrap-icons";

function SideNav() {
  return (
    <div>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a hrer="#" className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
          Company name
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          type="text"
          aria-label="Search"
          placeholder="Search"
          className="form-control form-control-dark w-100 border-0 bg-gradient"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a hrer="#" className="nav-link px-3">
              Sign out
            </a>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item d-flex align-items-center">
                  <a
                    hrer="#"
                    className="nav-link active d-flex align-items-center"
                    aria-current="page"
                  >
                    <HouseDoor size="16px" />
                    <span className="active-text">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    hrer="#"
                    className="nav-link d-flex align-items-center"
                    aria-current="page"
                  >
                    <FileEarmark size="16px" /> <span>Orders</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    hrer="#"
                    className="nav-link d-flex align-items-center"
                    aria-current="page"
                  >
                    <Cart4 size="16px" /> <span>Products</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    hrer="#"
                    className="nav-link d-flex align-items-center"
                    aria-current="page"
                  >
                    <People size="16px" /> <span>Customers</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    hrer="#"
                    className="nav-link d-flex align-items-center"
                    aria-current="page"
                  >
                    <BarChartLine size="16px" /> <span>Reports</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    hrer="#"
                    className="nav-link d-flex align-items-center"
                    aria-current="page"
                  >
                    <Stack /> <span>Intelegrations</span>
                  </a>
                </li>
              </ul>
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                {/* <div className="d-flex justify-content-between align-items-center"> */}
                <span>Saved Reports</span>
                {/* <a
              href="#"
              aria-label="Add a new report"
              className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
            > */}
                <span className="pe-auto">
                  <PlusCircle />
                </span>
                {/* </a> */}
                {/* </div> */}
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a href="#" className="nav-link d-flex align-items-center">
                    <FileEarmarkText />
                    <span> Current month</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link d-flex align-items-center">
                    <FileEarmarkText />
                    <span> Last quarter</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link d-flex align-items-center">
                    <FileEarmarkText />
                    <span>Social engagement</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link d-flex align-items-center">
                    <FileEarmarkText />
                    <span>Year-end sale</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1>Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  This week
                </button>
              </div>
            </div>
            <div style={{ width: "100%" }}></div>
            <h2>Section title</h2>
          </main>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
