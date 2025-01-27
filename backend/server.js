import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo_db",
});

db.connect((err) =>{
  if(err) throw err;
  console.log("Connected to the database!")
})

app.get("/", (req, res) => {
  const sql = "SELECT id,title,description FROM todos WHERE is_done = 0";
  db.query(sql, (err, result) => {
    if (err)
      return res.status(500).json({ message: "Server error", error: err });
    res.status(200).json(result);
  });
});

app.post("/todos", (req, res) => {
  console.log("Received Data :", req.body);
  const sql = "INSERT INTO todos (`title`,`description`) VALUES (?)";

  const tasks = [req.body.title, req.body.description];
  db.query(sql, [tasks], (err, result) => {
    if (err) {
      console.log("Database Error :", err);
      return res.status(500).json({ error: "Database Error:", details: err });
    }
    return res.json({ message: "Task added successfully", result });
  });
});

app.put("/todos/:id", (req, res) => {
  const taskId = req.params.id;
  console.log("Received ID :", taskId);
  const sql = "UPDATE todos SET is_done = 1 WHERE id = ?";

  db.query(sql, [taskId], (err, result) => {
    if (err) {
      console.error("Error updating task:", err);
      return res.status(500).json({ message: "Server error", error: err });
    }
    return res.json({ message: "Task marked as done successfully." });
  });
});

app.listen(8081, () => {
  console.log("Listening...");
});
