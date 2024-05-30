import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [todoId, setTodoId] = useState("");
  const [filter, setFilter] = useState("0");
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {}, [setIsCompleted]);

  const handleChange = (e, id) => {
    for (let todo of todos) {
      if (todo.id === id) {
        todo.isCompleted = e.target.value === "completed" ? true : false;
        if (todo.isCompleted) {
          e.target.classList.add("completed");
        } else {
          e.target.classList.remove("completed");
        }
        setIsCompleted(!isCompleted);
        break;
      }
    }
  };

  const handleClick = () => {
    if (name === "") {
      alert("Please enter a title for the todo.");
      return;
    }
    if (description === "") {
      alert("Please enter a description for the todo.");
      return;
    }
    let id = 0;
    if (todos.length === 0) {
      id = 1;
    } else {
      id = todos[todos.length - 1].id + 1;
    }
    setTodos([
      ...todos,
      {
        id: id,
        name: name,
        description: description,
        isCompleted: false,
      },
    ]);
    setName("");
    setDescription("");
  };

  const editTodo = (todo) => {
    setName(todo.name);
    setDescription(todo.description);
    setIsUpdate(true);
    setTodoId(todo.id);
  };

  const updateTodo = () => {
    for (let todo of todos) {
      if (todo.id === todoId) {
        todo.name = name;
        todo.description = description;
        setIsUpdate(false);
        setTodoId("");
        setName("");
        setDescription("");
        break;
      }
    }
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <header>
        <h2>My Todo</h2>
      </header>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Todo Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          className="input"
          placeholder="Todo Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button className="btn" onClick={isUpdate ? updateTodo : handleClick}>
          {isUpdate ? "Update Todo" : "Add Todo"}
        </button>
      </div>
      <div className="todo-header">
        <p>My Todos</p>
        <div className="filter">
          <label htmlFor="filter">Status Filter:</label>
          <select
            id="filter"
            className="status"
            onChange={(event) => setFilter(event.target.value)}
          >
            <option value="0">All</option>
            <option value="1">Completed</option>
            <option value="2">Not Completed</option>
          </select>
        </div>
      </div>
      <div className="todos-container">
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              handleChange={handleChange}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              filter={filter}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
