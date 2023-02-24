import validator from './validator.js';

/* Busca a partir de la carpeta doinde esto -> ./ */

const text_name = document.querySelector("#text-name");
const cardNumber = document.querySelector("#creditCardNumber");
const button = document.querySelector("#validator");
const label_tarjeta = document.querySelector("#label-number");
const label_nombre = document.querySelector("#label-name");
const date = document.querySelector("#date");
const label_date = document.querySelector("#label-date");
const label_cvv = document.querySelector("#label-cvv");
const cvv = document.querySelector("#cvv");
const label_month = document.querySelector("#label-month");
const month = document.querySelector("#month");

// keyup o input
//cardNumber.addEventListener('keyup', validator.separatedNumber)

button.addEventListener('click', () => {
  
  if(text_name.value.length === 0){
    alert('Falta el ingresar el nombre')
  }else if(cardNumber.value.length === 0){
    alert('Falta ingresar el número de tarjeta')
  }else if(date.value.length === 0){
    alert('Falta ingresar la fecha de vencimiento')
  }else if(month.value.length === 0){
    alert('Falta ingresar la fecha de vencimiento')
  }else if(cvv.value.length === 0){
    alert('Falta ingresar el cvv')
  }else{
    validator.isValid(cardNumber.value)
  }
  
})

date.addEventListener('keyup', () => {
  label_date.innerHTML = date.value
  
})

cardNumber.addEventListener('keyup', () => {
  label_tarjeta.innerHTML = validator.maskify(cardNumber.value)
  validator.target(cardNumber.value)
  
})
// para separar los números -> label_tarjeta.innerHTML = validator.validaNum(cardNumber.value)

text_name.addEventListener('keyup', () => {
  label_nombre.innerHTML = text_name.value
})

cvv.addEventListener('keyup', () => {
  label_cvv.innerHTML = cvv.value
  
})

month.addEventListener('keyup', () => {
  label_month.innerHTML = month.value
})
