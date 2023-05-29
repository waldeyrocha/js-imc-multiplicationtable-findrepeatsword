// Calcular IMC

// const peso = 70;

// const altura = 1.75;

// let resultado = Number(peso / (altura * altura)).toFixed(2);

// switch (true) {
//   case resultado < 17:
//     console.log("Muito abaixo do peso");
//     break;

//   case resultado >= 17 && resultado <= 18.49:
//     console.log("Abaixo do peso");
//     break;

//   case resultado >= 18.5 && resultado <= 24.99:
//     console.log(`Peso normal o resultado do IMC é ${resultado}`);
//     break;

//   case resultado >= 25 && resultado <= 29.99:
//     console.log(`Acima do peso o resultado do IMC é ${resultado}`);
//     break;

//   case resultado >= 30 && resultado <= 34.99:
//     console.log("Obesidade I");
//     break;

//     case resultado >= 35 && resultado <= 39.99:
//     console.log("Obesidade II");
//     break;
// }

// let imc = () => {

//   let resultado = Number(peso / (altura * altura)).toFixed(2);

//   if ( resultado < 17){
//     console.logo("Muito abaixo do peso")
//   }else if ( resultado >= 17 && resultado <= 18.49){

//     console.log("Abaixo do peso")
//   }else{
//     console.log("Peso errado")
//   }

//   console.log(`${resultado}`);
// };

// imc();

// tabuada

// const multiplicar = 4;

// for ( let i = 0; i <= 10; i++){
//   let resultado = i * multiplicar;
//   console.log(`${multiplicar} x ${i} = ${resultado}`);
// }

//Encontrar palavras repetidas

const word = "Abac ate".toLowerCase().replaceAll(" ", "");

let letters = {};

for (let i = 0; i < word.length; i++) {

  if (letters[word[i]]) {
    letters[word[i]]++;
  } else {
    letters[word[i]] = 1;
  }

}

console.log(letters);