import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskCard from "./TaskCard";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        setTasks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleTaskDone = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const tasksToDisplay = tasks.slice(0, 5);

  return (
    <div 
    className="d-flex flex-column h-100"
    >
      <h3 className="fw-bold text-dark mb-4 text-start">Task List</h3>
      <div 
      className="overflow-auto"
      style={{
        maxHeight: "calc(100% - 3rem)", 
      }}
      >
        {tasksToDisplay.map((task) => (
          <div key={task.id}>
            <TaskCard task={task} onTaskDone={handleTaskDone} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
