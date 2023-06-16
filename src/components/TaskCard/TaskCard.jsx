import React, { useState } from "react";
import "./TaskCard.css";
import { deleteTask } from "../../features/task/taskSlice";
import { useDispatch } from "react-redux";
import EditTask from "../EditTask/EditTask";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditActive, setIsEditActive] = useState(false);
  return (
    <div className="TaskCard">
      <div className="taskData">
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <p className="email">
          {task.startdate}-{task.enddate}
        </p>
      </div>
      {isEditActive ? (
        <EditTask setIsEditActive={setIsEditActive} task={task} />
      ) : null}
      <div className="updateAndDelete">
        <button
          className="delete"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          <i className="bx bx-trash"></i>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsEditActive((prev) => !prev);
          }}
          className="editBtn"
        >
          <i className="bx bx-edit"></i>
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
