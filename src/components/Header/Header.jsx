import React from "react";
import "./Header.css"

const Header = () => {
  return <div className="header">
    <div className="logo">Car<span>ee</span>r</div>
    <div className="navBar">
      <a href="#">Employees</a>
      <a href="#">Tasks</a>
    </div>
  </div>;
};

export default Header;
