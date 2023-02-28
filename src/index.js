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
const danger = document.querySelector("#danger");

const close_success = document.querySelector("#close-success");
const close_error = document.querySelector("#close-error");
const success = document.querySelector("#success");
const error = document.querySelector("#error");

// keyup o input
//cardNumber.addEventListener('keyup', validator.separatedNumber)

button.addEventListener('click', () => {
  
  if(text_name.value === ''){
    danger.style.display = 'block'
    danger.innerHTML = 'Ingresar el nombre'
  }else if(cardNumber.value === ''){
    danger.style.display = 'block'
    danger.innerHTML = 'Ingresar el número de la tarjeta '
  }else if(date.value === ''){
    danger.style.display = 'block'
    danger.innerHTML = 'Ingresar el dia de la FV'
  }else if(month.value === ''){
    danger.style.display = 'block'
    danger.innerHTML = 'Ingresar el mes de la FV'
  }else if(cvv.value === ''){
    danger.style.display = 'block'
    danger.innerHTML = 'Ingresar el cvv'
  }else{
    danger.style.display = 'none'
    validator.isValid(cardNumber.value)
  }
  
})

close_error.addEventListener('click', () => {
  error.style.display = 'none'
})

close_success.addEventListener('click', () => {
  success.style.display = 'none'
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
