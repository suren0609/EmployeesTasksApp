import React from "react";
import "./EmployeeCard.css";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../features/employee/employeeSlice";

const EmployeeCard = ({ emp }) => {
  const dispatch = useDispatch();
  return (
    <div className="EmployeeCard">
      <div className="personData">
        <h3>{emp.name + " " + emp.surname}</h3>
        <p>{emp.position}</p>
        <p className="email">{emp.email}</p>
      </div>
      <div className="delete">
        <button className="delete" onClick={() => dispatch(deleteEmployee(emp.id))}>
          <i className="bx bx-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
