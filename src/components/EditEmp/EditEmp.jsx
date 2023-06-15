import React, { useState } from "react";
import "./EditEmp.css";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "../../features/employee/employeeSlice";

const EditEmp = ({ emp }) => {
  const [data, setData] = useState(emp);
  const dispatch = useDispatch();
  const editEmpHandler = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(data));
  };

  return (
    <div className="EditEmp">
      <form onSubmit={editEmpHandler}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Surname"
            value={data.surname}
            onChange={(e) => setData({ ...data, surname: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Position"
            value={data.position}
            onChange={(e) => setData({ ...data, position: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <input className="updateBtn" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default EditEmp;
