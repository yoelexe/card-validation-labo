
/* PRUEBA con función de flecha
const validator = (a,b) => {
    console.log("Hola ")
    return a+b
};
*/

export const cardVerificationNum = () => {
  const cardNumber = document.querySelector("#cardno");
  // imagen de tarjeta
  //const cardNumberText = document.querySelector(".number-vl");

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
  let reverseNum = cardReverse;
  
  let pairNum;

  for (let i = 0; i < reverseNum.length; i++){

    if((i+1) % 2 === 0){
      pairNum = (reverseNum[i] * 2);
      if(pairNum >= 10){
        const firstDigit = ((pairNum - 10) + 1);
        reverseNum[i] = firstDigit;
      }else{
        reverseNum = pairNum;
      }
    }
    
    count += reverseNum[i];
  }

  // eslint-disable-next-line eqeqeq
  if(count % 10 === 0){
    console.log('Tarjeta válida')
    return true;
  }else{
    console.log('Tarjeta inválida')
    return false;
  }

}

export const isValid = () => {
  const allNumber = document.getElementById('cardno');
  //const reverse = allNumber.split('').reverse().join('');
  //const allValidator = document.getElementById('ccValidator');
  //let message = "";

  
  
  if(algorithm(allNumber.value)){
    //message = "that worked!";
    console.info("that worked")
          
  }else{
    //message = "verification failed :(";
    console.warn("verification failed")
  }
}


//export default validator;
