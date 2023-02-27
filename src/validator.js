const isValid = (creditCardNumber) => {
  //const allNumber = document.getElementById('creditCardNumber');
  const cardReverse = creditCardNumber.split(' ').join('').split('').reverse()


  let count = 0;
  //let message = "Tarjeta inválida";

  for (let i = 0; i < cardReverse.length; i++){

    cardReverse[i] = parseInt(cardReverse[i])
    if(i % 2 !== 0){
      cardReverse[i] = cardReverse[i] * 2
    }

    if(cardReverse[i] >= 10){
      cardReverse[i] = cardReverse[i] - 9
    }

    count += cardReverse[i]
  }
  //console.log(count)
  // document.getElementById("message-error").removeAttribute('class', 'message-error')

  

  if(count % 10 === 0){
    document.getElementById("success").style.display = 'block'
    document.getElementById("danger").innerHTML = 'Tarjeta válida'
    document.body.style.background = 'green'
    return true;
  }else{
    document.getElementById("danger").style.display = 'block'
    document.getElementById("danger").innerHTML = 'Tarjeta inválida'
    return false;
  }

}

const maskify = (creditCardNumber) => {
  return creditCardNumber.replace(/.(?=.{4})/g, "#");
}

const validaNum = (label_tarjeta) => {
  return label_tarjeta.replace(/([0-9]{4})/g, '$1 ');
}

const target = (creditCardNumber) =>  {

  const vi = new RegExp("^4");
  if(creditCardNumber.match(vi) !== null){
    document.getElementById("visaLogo").src="image/visa.png"
    document.getElementById("second-container").setAttribute('class', 'second-container')
    return 'Visa';
  }

  const am = new RegExp("^(34|37)");
  if(creditCardNumber.match(am) !== null){
    document.getElementById("visaLogo").src="image/amex.png"
    document.getElementById("second-container").setAttribute('class', 'american')
    return 'American Express'
  }

  const ma = new RegExp("^5[1-5]");
  if(creditCardNumber.match(ma) !== null){
    document.getElementById("visaLogo").src="image/mastercard.png"
    document.getElementById("second-container").setAttribute('class', 'mastercard')
    return 'Mastercard'
  }

  return "";  

}

const validDate = (date) => {
  const reg = /(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/
  const newStr = date.replace(reg, " - ")
  return newStr
}

const validator = {
  isValid, 
  maskify, 
  validaNum,
  target,
  validDate
}

export default validator
