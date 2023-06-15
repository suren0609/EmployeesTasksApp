import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = ({ emp }) => {
  return <div className="EmployeeCard">
    <div className="personData">
        <h3>{emp.name + " " + emp.surname}</h3>
        <p>{emp.position}</p>
        <p className="email">{emp.email}</p>
    </div>
    <div className="delete">
        <button className="delete"><i class='bx bx-trash'></i></button>
    </div>
  </div>;
};

export default EmployeeCard;
