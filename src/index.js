import {isValid, cardVerificationNum} from './validator.js';

/* Busca a partir de la carpeta doinde esto -> ./ */


//const form = document.querySelector("#credit-card");


const cardNumber = document.querySelector("#cardno");
const button = document.querySelector("#validator");
// imagen de tarjeta
//const cardNumberText = document.querySelector(".number-vl");

// keyup o input
cardNumber.addEventListener("keyup", cardVerificationNum)

button.addEventListener("click", isValid)
