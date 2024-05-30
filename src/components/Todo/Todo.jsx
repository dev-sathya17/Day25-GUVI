import "./Todo.css";

const Todo = ({ todo, handleChange, editTodo, deleteTodo, filter }) => {
  const filterTodo = () => {
    if (filter === "1" && todo.isCompleted) {
      return true;
    } else if (filter === "2" && !todo.isCompleted) {
      return true;
    } else if (filter === "0") {
      console.log(filter);
      return true;
    }
    return false;
  };

  return (
    <>
      {filterTodo() && (
        <div className="todo">
          <p>Name: {todo.name}</p>
          <p>Description: {todo.description}</p>
          <div className="status-container">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              className={todo.isCompleted ? "status completed" : "status"}
              onChange={(e) => handleChange(e, todo.id)}
              value={todo.isCompleted ? "completed" : "notCompleted"}
            >
              <option value="notCompleted">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="btn-group">
            <button className="btn editBtn" onClick={() => editTodo(todo)}>
              Edit
            </button>
            <button
              className="btn deleteBtn"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
