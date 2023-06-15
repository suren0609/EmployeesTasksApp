
import "./App.css";

import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import EmployeeDetails from "./pages/EmployeeDetails/EmployeeDetails";

function App() {
  

  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<EmployeesPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
