import Joke from "./components/Joke";

const App = () => {
  return (
    <>
      <Joke
        setup="Setup: ¿Por qué los pájaros no usan Facebook?"
        punchline="Punchline: Porque ya tienenTwitter."
      />
      <Joke
        setup="Setup: ¿Cuál es el animal más antiguo?"
        punchline="Punchline: La cebra, porque está en blanco y negro. "
      />
      <Joke
        setup="Setup: ¿Qué hace una abeja en el gimnasio?"
        punchline="Punchline: ¡Zum-ba!"
      />
    </>
  );
};

export default App;
