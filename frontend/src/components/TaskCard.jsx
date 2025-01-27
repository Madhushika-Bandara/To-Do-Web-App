import axios from "axios";
import React, { useState } from "react";

function TaskCard({ task, onTaskDone }) {
  console.log({ task });

  const handleMarkDone = () => {
    axios
      .put(`http://localhost:8081/todos/${task.id}`)
      .then(() => {
        onTaskDone(task.id);
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  };

  return (
    <div
      className="card shadow-sm border-0 rounded-3 p-1 m-2"
      style={{ maxWidth: "500px", width: "70%", backgroundColor: "#bcbec0" }}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div style={{ maxWidth: "90%" }}>
          <h6 className="fw-bold mb-0">{task.title}</h6>
          <p className="text-muted mb-0 small mb-0">{task.description}</p>
        </div>
      </div>
      <div className="d-flex justify-content-end ">
        <button
          className="btn btn-outline-secondary rounded-3 btn-sm"
          onClick={handleMarkDone}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
