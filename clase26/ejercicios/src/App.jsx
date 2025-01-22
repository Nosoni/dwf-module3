import { useState } from "react";
import "./App.css";

function App(props) {
  const [name, setName] = useState("");
  const [casado, setCasado] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleChangeCheckbox = (e) => {
    setCasado(e.target.checked);
  };

  // const imprimirValores = (e) => {
  //   e.preventDefault();
  //   console.log(name);
  //   console.log(casado);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 5) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    console.log(name);
    console.log(casado);
    console.log("Datos enviados");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Nombre: </label>
        <input
          className={error && "inputError"}
          type="text"
          placeholder="First Name"
          value={name}
          onChange={handleChange}
        />
        {error ? <p className="error">Error. Longitud no permitida</p> : <></>}
        <label htmlFor="casado">Estado civil: </label>
        <input
          id="casado"
          type="checkbox"
          checked={casado}
          onChange={handleChangeCheckbox}
        />

        {/* <button onClick={imprimirValores}>Ver valores</button> */}
        <button className={error && "error"} type="submit">
          Enviar datos
        </button>
      </form>
    </>
  );
}

export default App;
