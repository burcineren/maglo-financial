import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

type Task = { id: number; text: string };

export default function ToDoForm() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storaged = localStorage.getItem("tasks");
    console.log("storaged::", storaged);
    if (storaged) {
      setTasks(JSON.parse(storaged));
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    setTasks([...tasks, { id: Date.now(), text: value }]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setValue("");
  };

  const handleClearSubmit = () => {
    setValue("");
    setTasks([]);
  };

  return (
    <>
      <div>
        <label htmlFor="task-input">To do: </label>
        <input
          id="task-input"
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button id="add-task-btn" className="btn" onClick={handleSubmit}>
          Add
        </button>
        <button
          id="clear-tasks-btn"
          className="btn"
          onClick={handleClearSubmit}
        >
          Clear
        </button>
      </div>
      <TodoList tasks={tasks} />
    </>
  );
}
