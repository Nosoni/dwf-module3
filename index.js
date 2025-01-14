function saludandoVictoria(nombre) {
  return [`Hola ${nombre}`, `Felicidades ${nombre} has ganado`];
}

const [saludo, felicitacion] = saludandoVictoria("Juan");

console.log(saludo);
console.log(felicitacion);

const gatos = [
  {
    name: "Mr. Whiskaz",
    phone: "(212) 555-1234",
    mail: "mr.whiskaz@miau.com",
    address: "Calle Falsa 123",
  },
  {
    name: "Don José",
    phone: "(212) 555-1234",
    mail: "mr.whiskaz@miau.com",
    address: "Calle Falsa 123",
  },
];

const perros = [
  {
    name: "Felix",
    phone: "(212) 555-1234",
    mail: "mr.whiskaz@miau.com",
    address: "Calle Falsa 123",
  },
  {
    name: "Don Gato",
    phone: "(212) 555-1234",
    mail: "mr.whiskaz@miau.com",
    address: "Calle Falsa 123",
  },
];

const animales = { ...gatos[0], ...perros[0] };

console.log(animales);
