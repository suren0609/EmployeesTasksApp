import React, { useState } from "react";
import "./EditTask.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../features/task/taskSlice";

const EditTask = ({ task, setIsEditActive }) => {
  const employees = useSelector((state) => state.employee.employees);
  const [data, setData] = useState(task);
  const dispatch = useDispatch();
  const editTaskHandler = (e) => {
    e.preventDefault();
    dispatch(updateTask(data));
    setIsEditActive(false);
  };
  return (
    <div className="EditTask">
      <h3>Edit Task</h3>
      <form onSubmit={editTaskHandler}>
        <p className="inputTitle">Name</p>
        <input
          type="text"
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <p className="inputTitle">Start date</p>
        <input
          type="text"
          value={data.startdate}
          placeholder="DD/MM/YYYY"
          onChange={(e) => setData({ ...data, startdate: e.target.value })}
        />
        <p className="inputTitle">End date</p>
        <input
          type="text"
          value={data.enddate}
          placeholder="DD/MM/YYYY"
          onChange={(e) => setData({ ...data, enddate: e.target.value })}
        />
        <p className="inputTitle">Description</p>
        <textarea
          type="text"
          value={data.description}
          placeholder="Description"
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <p className="inputTitle">Employee</p>
        <select name="Employee">
          <option value="" disabled selected>
            Select Employee
          </option>
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.name} {emp.surname}
            </option>
          ))}
        </select>
        <input className="addBtn" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default EditTask;
