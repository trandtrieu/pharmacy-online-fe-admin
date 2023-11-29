import {
  faCashRegister,
  faFileInvoice,
  faPercent,
  faPills,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

class HeaderComponent extends Component {
  render() {
    return (
      <>
        <aside className="left-sidebar">
          {/* Sidebar scroll*/}
          <div>
            <div className="brand-logo d-flex align-items-center justify-content-between">
              <a href="./index.html" className="text-nowrap logo-img">
                <img
                  src="../assets/images/logos/dark-logo.svg"
                  width={180}
                  alt=""
                />
              </a>
              <div
                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                id="sidebarCollapse"
              >
                <i className="ti ti-x fs-8" />
              </div>
            </div>
            {/* Sidebar navigation*/}
            <nav className="sidebar-nav scroll-sidebar" data-simplebar>
              <ul id="sidebarnav">
                <li
                  className="nav-small-cap"
                  style={{ backgroundColor: "transparent" }}
                >
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Home</span>
                </li>
                <li
                  className="sidebar-item"
                  style={{ backgroundColor: "transparent" }}
                >
                  <Link className="sidebar-link" to="/dashboard">
                    <span>
                      <i className="ti ti-layout-dashboard" />
                    </span>
                    <span className="hide-menu">Dashboard</span>
                  </Link>
                </li>
                <li
                  className="sidebar-item"
                  style={{ backgroundColor: "transparent" }}
                >
                  <Link className="sidebar-link" to="/product-manage">
                    <span>
                      <FontAwesomeIcon icon={faPills} />{" "}
                    </span>
                    <span className="hide-menu">Products</span>
                  </Link>
                </li>
                <li
                  className="sidebar-item"
                  style={{ backgroundColor: "transparent" }}
                >
                  <Link className="sidebar-link" to="/prescription-manage">
                    <span>
                      <FontAwesomeIcon icon={faFileInvoice} />{" "}
                    </span>
                    <span className="hide-menu">Prescriptions</span>
                  </Link>
                </li>
                <li
                  className="sidebar-item"
                  style={{ backgroundColor: "transparent" }}
                >
                  <Link className="sidebar-link" to="/accounts">
                    <span>
                      <FontAwesomeIcon icon={faPills} />{" "}
                    </span>
                    <span className="hide-menu">Accounts</span>
                  </Link>
                </li>
                <li
                  className="sidebar-item"
                  style={{ backgroundColor: "transparent" }}
                >
                  <Link className="sidebar-link" to="/category-manage">
                    <span>
                      <FontAwesomeIcon icon={faPills} />{" "}
                    </span>
                    <span className="hide-menu">Categories</span>
                  </Link>
                </li>{" "}
                <li
                  className="sidebar-item"
                  style={{ backgroundColor: "transparent" }}
                >
                  <Link className="sidebar-link" to="/discountcodes">
                    <span>
                      <FontAwesomeIcon icon={faPercent} />
                    </span>
                    <span className="hide-menu">Discount</span>
                  </Link>
                </li>
                <li
                  className="sidebar-item"
                  style={{ backgroundColor: "transparent" }}
                >
                  <Link className="sidebar-link" to="/order-manage">
                    <span>
                      <FontAwesomeIcon icon={faCashRegister} />{" "}
                    </span>
                    <span className="hide-menu">Orders</span>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* End Sidebar navigation */}
          </div>
          {/* End Sidebar scroll*/}
        </aside>
      </>
    );
  }
}

export default HeaderComponent;
