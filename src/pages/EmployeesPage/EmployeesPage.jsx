import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../features/employee/employeeSlice";
import "./EmployeesPage.css";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import CreateEmp from "../../components/CreateEmp/CreateEmp";

const EmployeesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  const employees = useSelector((state) => state.employee.employees);
  return (
    <div className="EmployeesPage">
      <div className="empPageHeader">
        <h2>Employees</h2>
      </div>
      <div className="empPageBody">
        {employees.map((emp) => (
          <EmployeeCard key={emp.id} emp={emp}/>
        ))}
      </div>
      <CreateEmp />
    </div>
  );
};

export default EmployeesPage;
