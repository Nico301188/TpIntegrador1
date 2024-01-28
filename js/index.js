// obtener el ancho de la pantalla
// const width = window.innerWidth
// console.log(width)

// addEventListener("resize", (event) => {});

localStorage.setItem("saludo", "hola")
localStorage.setItem("cantidad", 33)

const saludo = localStorage.getItem("saludo")
const cant = localStorage.getItem("cantiad")

// console.log(saludo)
// console.log(typeof cant) //string

// localStorage.removeItem("saludo")
// localStorage.clear()

// console.log(localStorage.key(1))

// JSON (Java Script Object Notation)
const user = {name: "pepe", age:40, address:"Calle falsa 123", isAdmin: false};
const userString = JSON.stringify(user);
localStorage.setItem("user", userString )

const remeberedUser = localStorage.getItem("user")

console.log(remeberedUser)
const parseUser = JSON.parse(remeberedUser)

console.log(parseUser)