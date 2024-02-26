import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ todo, toggleComplete, deleteTodo, editTodo }) {
  // const deleteHandler =
  // const editHandler =
  // const isCompleted = {props.todo.isCompleted}
  // console.log(`isCompleted: ${props.todo.isCompleted}`);
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(todo.id)}
        className={`${todo.isCompleted ? "completed" : ""}`}
      >
        {todo.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
}
