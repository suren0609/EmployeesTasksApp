import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../features/employee/employeeSlice";
import "./EmployeesPage.css";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import CreateEmp from "../../components/CreateEmp/CreateEmp";
import Loading from "../../components/Loading/Loading";

const EmployeesPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(getEmployees());
    setIsLoading(false);
  }, []);
  const employees = useSelector((state) => state.employee.employees);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="EmployeesPage">
      <div className="empPageHeader">
        <h2>Employees</h2>
      </div>
      <div className="empPageBody">
        {employees.map((emp) => (
          <EmployeeCard key={emp.id} emp={emp} />
        ))}
      </div>
      <CreateEmp />
    </div>
  );
};

export default EmployeesPage;
