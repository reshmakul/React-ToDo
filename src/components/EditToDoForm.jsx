import { useState } from "react";
export default function EditToDoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(1)
    editTodo(value, task.id);
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
        placeholder={`Update The task : ${task.task}`}
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
}
