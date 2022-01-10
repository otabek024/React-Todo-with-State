import React from "react";

const Form = ({ todo, setTodo, todos, setTodos, isValid, setIsValid }) => {
  const changeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (todo.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    setTodos([...todos].concat(newTodo));
    setTodo("");
  };

  const deleteTodo = () => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== todo.id) 

    setTodos(updatedTodos)
  }

  return (
    <>
      <form
        className={`form ${!isValid ? "invalid" : ""}`}
        onSubmit={handleSubmit}
      >
        <h3>Add Todo</h3>
        <input
          type="text"
          placeholder="Write your todo"
          onChange={changeHandler}
          value={todo}
        />
        <button>Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div className="output-results">
          <div className="output" key={todo.id}>{todo.text}</div>
          <i onClick={() => deleteTodo(todo.id)} className="far fa-trash-alt"></i>
        </div>
      ))}
    </>
  );
};

export default Form;
