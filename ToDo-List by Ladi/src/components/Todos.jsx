import Todo from "./Todo";

const Todos = ({ todos, handleDeleteTodo, handleUpdateTodo }) => {
  return (
    <div className="todos">
      <ul>
        {todos?.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
