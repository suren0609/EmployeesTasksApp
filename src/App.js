import "./App.css";

import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import EmployeeDetails from "./pages/EmployeeDetails/EmployeeDetails";
import Footer from "./components/Footer/Footer";

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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
