import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isValid, setIsValid] = useState(true);

  return (
    <div className="app">
      <Form
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
        isValid={isValid}
        setIsValid={setIsValid}
      />
    </div>
  );
};

export default App;
