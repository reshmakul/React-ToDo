import { useState } from "react";
import ToDoForm from "./ToDoForm";
import Todo from "./Todo";
import EditToDoForm from "./EditToDoForm";

export default function ToDoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Coding Practice React",
      isCompleted: false,
      isEditing: false,
    },
    { id: 2, task: "Do Meditation", isCompleted: true, isEditing: false },
    { id: 3, task: "Do Laundry ", isCompleted: false, isEditing: false },
  ]);
  const [id, setId] = useState(4);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: id, task: todo, isCompleted: false, isEditing: false },
    ]);
    setId(id + 1);
  };

  // reversing togglecomplete property
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  //deleting a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="ToDoList">
      {/* Adding todo into the form */}
      <ToDoForm addTodo={addTodo} />

      {/* Mapping one todo object */}
      {todos.map((todo) => {
        return todo.isEditing ? (
          <EditToDoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
}
