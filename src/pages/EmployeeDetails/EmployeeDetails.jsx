import React, { useEffect, useState } from "react";
import "./EmployeeDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTasksFromEmployee } from "../../features/task/taskSlice";
import { getOneEmployee } from "../../features/employee/employeeSlice";
import Loading from "../../components/Loading/Loading";

const EmployeeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(getTasksFromEmployee(id));
    dispatch(getOneEmployee(id));
    setIsLoading(false);
  }, []);

  const employee = useSelector((state) => state.employee.employee);
  const tasks = useSelector((state) => state.task.tasksEmp);
  console.log(tasks);
  if (isLoading) {
    return <Loading />;
  }
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
