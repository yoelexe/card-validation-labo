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
  console.log(count)

  if(count % 10 === 0){
    console.log("Tarjeta válida" )
    return true;
  }else{
    console.log('Tarjeta inválida')
    return false;
  }
}

const maskify = (creditCardNumber) => {
  return creditCardNumber.replace(/.(?=.{4})/g, "#");
}

const validaNum = (label_tarjeta) => {
  return label_tarjeta.replace(/([0-9]{4})/g, '$1 ');
}

const validator = {
  isValid, 
  maskify, 
  validaNum
}

export default validator
