const readline = require('readline-sync');

function calulaIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function main() {
  const peso = readline.questionFloat('Qual o seu peso?');
  const altura =  readline.questionFloat('Qual o seu altura?');

  const resultIMC = calulaIMC(peso, altura);

  if(resultIMC < 18.5) {
    console.log('Abaixo do peso');
  } else if(resultIMC < 24.9) {
    console.log('Peso normal');
  } else if(resultIMC < 29.9) {
    console.log('Acima do peso');
  } else if(resultIMC < 34.9) {
    console.log('Obesidade grau I');
  } else if(resultIMC < 39.9) {
    console.log('Obesidade grau II');
  } else {
    console.log('Obesidade graus III e IV');
  }
}

main();
