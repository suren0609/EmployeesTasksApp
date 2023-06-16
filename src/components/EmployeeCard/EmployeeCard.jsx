import React, { useState } from "react";
import "./EmployeeCard.css";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../features/employee/employeeSlice";
import EditEmp from "../EditEmp/EditEmp";
import { NavLink as Link } from "react-router-dom";

const EmployeeCard = ({ emp }) => {
  const dispatch = useDispatch();
  const [isEditActive, setIsEditActive] = useState(false);

  return (
    <div className="EmployeeCard">
      <div className="personData">
        <Link to={`employee/${emp.id}`}>
          {emp.name + " " + emp.surname}
        </Link>
        <p>{emp.position}</p>
        <p className="email">{emp.email}</p>
      </div>
      {isEditActive ? (
        <EditEmp setIsEditActive={setIsEditActive} emp={emp} />
      ) : null}
      <div className="updateAndDelete">
        <button
          className="delete"
          onClick={() => dispatch(deleteEmployee(emp.id))}
        >
          <i className="bx bx-trash"></i>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsEditActive((prev) => !prev);
          }}
          className="editBtn"
        >
          <i className="bx bx-edit"></i>
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
