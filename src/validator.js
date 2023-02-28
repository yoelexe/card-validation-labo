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
    if (typeof window !== 'undefined'){
      document.getElementById("success").style.display = 'block'
    }
    return true;
  }else{
    if (typeof window !== 'undefined'){
      document.getElementById("error").style.display = 'block'
    }
    return false;
  }

}

const maskify = (creditCardNumber) => {
  return creditCardNumber.replace(/.(?=.{4})/g, "#"); 
}


/*
const validaNum = (label_tarjeta) => {
  return label_tarjeta.replace(/([0-9]{4})/g, '$1 ');
}
*/

const target = (creditCardNumber) =>  {

  const vi = new RegExp("^4");
  if(creditCardNumber.match(vi) !== null){
    if (typeof window !== 'undefined'){
      document.getElementById("visaLogo").src="image/visa.png"
      document.getElementById("second-container").setAttribute('class', 'second-container')
    }
    return 'Visa';
  }

  const am = new RegExp("^(34|37)");
  if(creditCardNumber.match(am) !== null){
    if (typeof window !== 'undefined'){
      document.getElementById("visaLogo").src="image/amex.png"
      document.getElementById("second-container").setAttribute('class', 'american')
    }
    return 'American Express'
  }

  const ma = new RegExp("^5[1-5]");
  if(creditCardNumber.match(ma) !== null){
    if (typeof window !== 'undefined'){
      document.getElementById("visaLogo").src="image/mastercard.png"
      document.getElementById("second-container").setAttribute('class', 'mastercard')
    }
    return 'Mastercard'
  } 

}

const validator = {
  isValid, 
  maskify, 
  target
}

export default validator
