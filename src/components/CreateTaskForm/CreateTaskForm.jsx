import React, { useEffect, useState } from "react";
import "./CreateTaskForm.css";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../features/task/taskSlice";
import { getEmployees } from "../../features/employee/employeeSlice";

const CreateTaskForm = () => {
  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  const employees = useSelector((state) => state.employee.employees);
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState({
    name: "",
    description: "",
    startdate: "",
    enddate: "",
    employeeId: "",
  });
  const addTaskHandler = (e) => {
    e.preventDefault();
    dispatch(createTask(taskData));
    setTaskData({
      name: "",
      description: "",
      startdate: "",
      enddate: "",
      employeeId: "",
    });
  };
  return (
    <div className="CreateTaskForm">
      <h3>Add new Employee</h3>
      <form onSubmit={addTaskHandler}>
        <input
          type="text"
          placeholder="Name"
          value={taskData.name}
          onChange={(e) => setTaskData({ ...taskData, name: e.target.value })}
        />
        <input
          type="text"
          value={taskData.startdate}
          placeholder="DD/MM/YYYY"
          onChange={(e) =>
            setTaskData({ ...taskData, startdate: e.target.value })
          }
        />
        <input
          type="text"
          value={taskData.enddate}
          placeholder="DD/MM/YYYY"
          onChange={(e) =>
            setTaskData({ ...taskData, enddate: e.target.value })
          }
        />
        <textarea
          type="text"
          value={taskData.description}
          placeholder="Description"
          onChange={(e) =>
            setTaskData({ ...taskData, description: e.target.value })
          }
        />
        <select
          name="Employee"
          onChange={(e) =>
            setTaskData({ ...taskData, employeeId: e.target.value })
          }
        >
          <option value="" disabled selected>
            Select Employee
          </option>
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.name} {emp.surname}
            </option>
          ))}
        </select>
        <input className="addBtn" type="submit" value="Add Employee" />
      </form>
    </div>
  );
};

export default CreateTaskForm;
