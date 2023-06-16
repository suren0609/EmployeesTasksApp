import React from "react";
import "./Header.css";
import { NavLink as Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const splitPath = pathname.split("/")
  return (
    <div className="header">
      <div className="logo">
        Car<span>ee</span>r
      </div>
      <div className="navBar">
        <Link
          to="/"
          className={splitPath[1] === "" ? "active" : ""}
        >
          Employees
        </Link>
        <Link to="/tasks" className={splitPath[1] === "tasks" ? "active" : ""}>
          Tasks
        </Link>
      </div>
    </div>
  );
};

export default Header;
