import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import TodoList from "./pages/TodoList";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const signInUser = (user) => {
    setUser(user);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn signInUser={signInUser} />} />

      <Route
        path="todolist"
        element={
          <PrivateRoute user={user}>
            <TodoList />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
