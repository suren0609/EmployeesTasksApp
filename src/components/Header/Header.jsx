import React from "react";
import "./Header.css";
import { NavLink as Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const splitPath = pathname.split("/");
  return (
    <div className="header">
      <div className="logo" onClick={() => navigate("/")} >
        Car<span>ee</span>r
      </div>
      <div className="navBar">
        <Link
          to="/"
          className={
            splitPath[1] === "" || splitPath[1] === "employee" ? "active" : ""
          }
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
