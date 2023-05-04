import doneIcon from "../assets/doneIcon.png";
import deleteIcon from "../assets/deleteIcon.png";

const Todo = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
  return (
    <li id={todo.id} className={todo.completed ? "completed" : ""}>
      {todo.name}
      <div className={`todos-icons ${todo.completed ? "completed" : ""}`}>
        <div
          className="todosIconsBox doneIcon-box"
          onClick={() => handleUpdateTodo(todo.id, todo.completed)}
        >
          <img src={doneIcon} alt="" />
        </div>
        <div
          className="todosIconsBox deleteIcon-box"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          <img src={deleteIcon} alt="" />
        </div>
      </div>
    </li>
  );
};

export default Todo;
