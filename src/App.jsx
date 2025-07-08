import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleApp = () => {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]); //
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <motion.div
      className="ToDo-app"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1.5 }}
    >
      <h1>My To-Do List</h1>
      <div style={{ fontSize: "1.5rem", color: "#555" }}>
        <Typewriter
          options={{
            strings: [
              "Organize your tasks.",
              "Stay productive.",
              "Complete your goals!",
              "Plan. Act. Achieve.",

              "One step at a time.",

              "Progress, not perfection.",

              "Make it happen today.",

              "Small steps, big results.",
              "You’ve got this!",

              "Stay focused. Stay sharp.",

              "Your future is built today.",

              "Do it now. Thank yourself later.",

              "Less talk, more action.",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      </div>
      <div className="add-task">
        <input
          type="text"
          placeholder="What needs doing?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleApp()}
        />
        <button onClick={handleApp}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="task-checkbox"
            />
            <span>
              {task.text}
              <button
                onClick={() => removeTask(task.id)}
                className="remove-btn"
              >
                X
              </button>
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ToDoApp;
