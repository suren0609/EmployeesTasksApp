import React, { useEffect } from "react";
import "./EmployeeDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTasks, getTasksFromEmployee } from "../../features/task/taskSlice";
import {
  getEmployees,
  getOneEmployee,
} from "../../features/employee/employeeSlice";

const EmployeeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksFromEmployee(id));
    dispatch(getOneEmployee(id));
  }, []);

  const employee = useSelector((state) => state.employee.employee);
  const tasks = useSelector((state) => state.task.tasksEmp);
  console.log(tasks);
  return (
    <div className="EmployeeDetails">
      <h1>
        {employee.name} {employee.surname}
      </h1>
      <ul>
        <li>Position: {employee.position}</li>
        <li>Email: {employee.email}</li>
        <li>
          Tasks:{" "}
          {tasks.map((task) => (
            <div key={task.id}>
              <h3>Task name: {task.name}</h3>
              <p>Task description: {task.description}</p>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default EmployeeDetails;
