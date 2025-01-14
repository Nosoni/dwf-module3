const persona = {
  name: "Tony",
  age: 45,
  address: {
    city: "New York",
    zip: 55321321,
    lat: 14.3232,
    lng: 34.9233321,
  },
  lastname: "Stark",
};

//sin destructuring
const message = `Hello ${persona.name} ${persona.lastname}`;
console.log(message);

//con destructuring
const { name, lastname, id } = persona;
const newmessage = `Hello ${name} ${lastname} ${id}`;
console.log(newmessage);

const saludandoVictoria = ({ name, lastname }) => {
  return [
    `Hola ${name} ${lastname}`,
    `Felicidades ${name} ${lastname} has ganado`,
    () => console.log("Hola mundo"),
  ];
};

const newArray = saludandoVictoria(persona);

const [saludo, felicitacion, holaMundo] = saludandoVictoria(persona);

console.log(saludo);
console.log(felicitacion);
holaMundo()