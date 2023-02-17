
/* PRUEBA con función de flecha
const validator = (a,b) => {
    console.log("Hola ")
    return a+b
};
*/
// return e.charCode >= 48 && e.charCode <= 57

/* Regex para Date -> ^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/ */

/*export const cardVerificationNum = () => {
  const cardNumber = document.querySelector('#cardno');
  // imagen de tarjeta
  //const cardNumberText = document.querySelector(".number-valor");

  cardNumber.addEventListener("keyup", (e) => {
    if(!e.target.value){
      //cardNumberText.innerHTML = "1234 5678 9101 1121";
      //console.log("Funciona")
    }else{
      const valuesOfInput = e.target.value.replaceAll(" ", "");        
    
      if(e.target.value.length > 14){
        e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
      // ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$
      //cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
      }else if(e.target.value.length > 9){
        e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
      }else if(e.target.value.length > 4){
        e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
      }
    }
  })
}

const algorithm = (cardno) => {
  
  const cardReverse = cardno.split(' ').join('').split('').reverse()

  let count = 0;
  let message = "Tarjeta inválida";

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

  if(count % 10 === 0){
    message = "Tarjeta válida"
  }

  console.log(message)


  let collector = "";

  for(let i = 0; i < cardno.length; i++){
    if(i > 14){
      collector = collector + cardno[i]
    }else{
      collector = collector + "#"
    }
  }
  return collector

}

export const isValid = () => {
  const allNumber = document.getElementById('cardno');

  
  
  if(algorithm(allNumber.value)){
    console.log(algorithm(allNumber.value))
          
  }
}


//export default validator;*/

const validator = {
  
  isValid: function(creditCardNumber){
    console.log("Hola")
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


    /*if(allNumber.value){
      console.log(allNumber.value)
    }*/


    
  
  },

  maskify: function (creditCardNumber) {
    //const allNumber = document.getElementById('creditCardNumber');

    /*let collector = "";

    for(let i = 0; i < creditCardNumber.length; i++){
      if(i > -9){
        collector = collector + creditCardNumber[i]
      }else{
        collector = collector + "#"
      }
      
    }
    return collector*/
    return creditCardNumber.replace(/.(?=.{4})/g, "#");


  }}

export default validator;
