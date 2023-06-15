import React, { useState } from "react";
import "./CreateEmp.css";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../features/employee/employeeSlice";

const CreateEmp = () => {
  const dispatch = useDispatch();
  const [empData, setEmpData] = useState({
    name: "",
    surname: "",
    position: "",
    email: "",
  });
  const addEmpHandler = (e) => {
    e.preventDefault();
    dispatch(addEmployee(empData));
  };
  return (
    <div className="CreateEmp">
      <h3>Add new Employee</h3>
      <form onSubmit={addEmpHandler}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setEmpData({ ...empData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Surname"
          onChange={(e) => setEmpData({ ...empData, surname: e.target.value })}
        />
        <input
          type="text"
          placeholder="Position"
          onChange={(e) => setEmpData({ ...empData, position: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmpData({ ...empData, email: e.target.value })}
        />
        <input className="addBtn" type="submit" value="Add Employee" />
      </form>
    </div>
  );
};

export default CreateEmp;
