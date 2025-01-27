import { useState } from "react";
import "./App.css";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, todo: "tomar agua" },
    { id: 2, todo: "hacer ejercicio" },
    { id: 3, todo: "estudiar" },
  ]);

  const addTodo = (e) => {
    setTodoName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoName) {
      return;
    }

    setTodos([...todos, { id: todos.length + 1, todo: todoName }]);
  };

  const deleteTodo = (id) => {
    const filtrado = todos.filter((item) => item.id !== id);
    setTodos(filtrado);
  };
  return (
    <>
      {/* el botón está asociado a un evento submit
      y es el formulario que tendrá el evento donde validaremos lo que se ingrese */}
      <form className="todo" onSubmit={handleSubmit}>
        <label htmlFor="todo-input">Nueva tarea</label>
        <input
          id="todo-input"
          type="text"
          placeholder="Ingrese una tarea"
          onChange={addTodo}
        />
        <button type="submit">Agregar tarea</button>
      </form>
      <ul>
        {todos.map((item) => {
          return (
            <li key={item.id}>
              <input type="checkbox" data-list-item-checkbox />
              <label data-list-item-text>{item.todo}</label>
              <button onClick={() => deleteTodo(item.id)}>Eliminar</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;

{
  /* el botón no está asociado a un submit (form) 
    pero tiene un evento que se encargará de realizar las validaciones
    onClick */
}
{
  /* <div className="todo">
        <label htmlFor="todo-input">Nueva tarea</label>
        <input id="todo-input" type="text" placeholder="Ingrese una tarea" />
        <button type="button" onClick={(e) => e.preventDefault()}>Agregar tarea</button>
      </div> */
}
