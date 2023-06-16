import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../features/task/taskSlice";
import TaskCard from "../../components/TaskCard/TaskCard";
import "./TasksPage.css";
import CreateTaskForm from "../../components/CreateTaskForm/CreateTaskForm";
import Loading from "../../components/Loading/Loading";

const TasksPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(getTasks());
    setIsLoading(false);
  }, []);
  const tasks = useSelector((state) => state.task.tasks);
  if (isLoading) {
    return <Loading />;
  }
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
      <CreateTaskForm />
    </div>
  );
};

export default TasksPage;
