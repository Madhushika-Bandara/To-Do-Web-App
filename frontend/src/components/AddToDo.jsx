import axios from "axios";
import React, { useState } from "react";

function AddToDo() {
  const [tasks, setTasks] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tasks.title.trim() ) {
      setError("The title field cannot be empty.");
      return;
    }

    setError("");
    axios
      .post("http://localhost:8081/todos", tasks)
      .then((res) => {
        console.log("Response :", res);
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <h3 className="fw-bold text-dark mb-3">Add a Task</h3>

        {error && (
          <div className="alert alert-danger p-2 mb-3" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mb-3">
          <input
            type="text"
            placeholder="Add title"
            className="form-control mb-3 shadow-sm"
            value={tasks.title}
            onChange={(e) => {
              setTasks({ ...tasks, title: e.target.value });
            }}
          />
          <textarea
            placeholder="Add description"
            className="form-control mb-3 shadow-sm"
            rows="3"
            value={tasks.description}
            onChange={(e) => {
              setTasks({ ...tasks, description: e.target.value });
            }}
          />

          <button type="submit" className="btn btn-primary w-30">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddToDo;
