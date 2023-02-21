import validator from './validator.js';

/* Busca a partir de la carpeta doinde esto -> ./ */


//const form = document.querySelector("#credit-card");

const text_name = document.querySelector("#text-name");
const cardNumber = document.querySelector("#creditCardNumber");
const button = document.querySelector("#validator");
const label_tarjeta = document.querySelector("#label-number");
const label_nombre = document.querySelector("#label-name");
//const cardType = document.querySelector("#cardType");
// imagen de tarjeta
//const cardNumberText = document.querySelector(".number-valor");

// keyup o input
//cardNumber.addEventListener('keyup', validator.separatedNumber)

button.addEventListener('click', () => {
  validator.isValid(cardNumber.value)
  
})

cardNumber.addEventListener('keyup', () => {
  label_tarjeta.innerHTML = validator.maskify(cardNumber.value)
  validator.target(cardNumber.value)
  
})
// para separar los números -> label_tarjeta.innerHTML = validator.validaNum(cardNumber.value)

text_name.addEventListener('keyup', () => {
  label_nombre.innerHTML = text_name.value
})
