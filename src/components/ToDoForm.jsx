import { useState } from "react";
export default function ToDoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(1)
    addTodo(value);
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <h1>Today's Task</h1>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="What is task Today? "
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
