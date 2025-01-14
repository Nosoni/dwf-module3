import "./App.css";
import mrWiskas from "./images/mr-whiskerson.png";
import felixImg from "./images/felix.png";
import donJose from "./images/fluffykins.png";
import donGato from "./images/pumpkin.png";

import Card from "./components/Card";

function App() {
  const gatos = [
    {
      image: mrWiskas,
      name: "Mr. Whiskaz",
      phone: "(212) 555-1234",
      mail: "mr.whiskaz@miau.com",
      address: "Calle Falsa 123",
    },
    {
      name: "Don José",
      image: donJose,
      phone: "(212) 555-1234",
      mail: "mr.whiskaz@miau.com",
      address: "Calle Falsa 123",
    },
    {
      name: "Felix",
      image: felixImg,
      phone: "(212) 555-1234",
      mail: "mr.whiskaz@miau.com",
      address: "Calle Falsa 123",
    },
    {
      name: "Don Gato",
      image: donGato,
      phone: "(212) 555-1234",
      mail: "mr.whiskaz@miau.com",
      address: "Calle Falsa 123",
    },
  ];

  return (
    <>
      {gatos.map((gato, index) => (
        <Card key={index} {...gato} />
      ))}
      {/* <Card />
      <Card
        image={donJose}
        name={"Don José"}
        phone={"(212) 555-2345"}
        mail={"donjose@miau.com"}
      />
      <Card
        image={felixImg}
        name={"Felix"}
        phone={"(212) 555-4567"}
        mail={"felix@miau.com"}
      />
      <Card
        image={donGato}
        name={"Don Gato"}
        phone={"(212) 555-5678"}
        mail={"donGato@miau.com"}
      />
      <Card
        image={donGato}
        name={"Don Gato"}
        phone={"(212) 555-5678"}
        mail={"donGato@miau.com"}
      /> */}
    </>
  );
}

export default App;
