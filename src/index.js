import validator from './validator.js';

/* Busca a partir de la carpeta doinde esto -> ./ */


//const form = document.querySelector("#credit-card");


//const cardNumber = document.querySelector("#creditCardNumber");
const button = document.querySelector("#validator");
// imagen de tarjeta
//const cardNumberText = document.querySelector(".number-valor");

// keyup o input
//cardNumber.addEventListener('keyup', validator.separatedNumber)

button.addEventListener('click', validator.isValid())
button.addEventListener('click', validator.maskify())

console.log(validator)
