import { useState } from "react";
import Header from "../components/Header";
import Todos from "../components/Todos";

import { v4 as uuidv4 } from "uuid";

const TodoList = ({ userName }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [todo, setTodo] = useState({ name: "", id: null, completed: false });

  const addTodo = (e) => {
    e.preventDefault();
    if (!todo.name) return;
    const list = [todo, ...todos];
    setTodos(list);
    setTodo({ name: "", id: null });
    localStorage.setItem("list", JSON.stringify(list));
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("list", JSON.stringify(newTodos));
  };

  const handleUpdateTodo = (id, status) => {
    const todoList = [...todos];
    let updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !status;
        return todo;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("list", JSON.stringify(updatedTodos));
  };

  return (
    <section className="todo-list">
      <Header userName={userName} />
      <form onSubmit={addTodo}>
        <h2>add your daily tasks</h2>
        <label htmlFor="input">
          <input
            type="text"
            placeholder="my task"
            value={todo.name}
            onChange={(e) => setTodo({ name: e.target.value, id: uuidv4() })}
          />
          <button type="submit">add</button>
        </label>
        <Todos
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      </form>
    </section>
  );
};

export default TodoList;
