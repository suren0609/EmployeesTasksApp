import React, { useState } from "react";
import "./EmployeeCard.css";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../features/employee/employeeSlice";
import { useNavigate } from "react-router-dom";
import EditEmp from "../EditEmp/EditEmp";

const EmployeeCard = ({ emp }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditActive, setIsEditActive] = useState(false);
  return (
    <div className="EmployeeCard">
      <div className="personData">
        <h3 onClick={() => navigate(`employee/${emp.id}`)}>
          {emp.name + " " + emp.surname}
        </h3>
        <p>{emp.position}</p>
        <p className="email">{emp.email}</p>
      </div>
      {isEditActive ? <EditEmp emp={emp} /> : null}
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
