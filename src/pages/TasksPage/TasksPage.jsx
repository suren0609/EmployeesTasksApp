import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../features/task/taskSlice";
import TaskCard from "../../components/TaskCard/TaskCard";
import "./TasksPage.css";

const TasksPage = () => {
    
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, []);
  const tasks = useSelector((state) => state.task.tasks);
  return (
    <div className="TasksPage">
      <div className="taskPageHeader">
        <h2>Tasks</h2>
      </div>
      <div className="taskPageBody">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      {/* <CreateEmp /> */}
    </div>
  );
};

export default TasksPage;
