const readline = require('readline-sync');

function velocidadeMedia(d, t) {
  return console.log(`Velocidade média: ${(d / t).toFixed(2)} m/s`);
}

function main() {
  const distancia = readline.questionInt('Qual a distância percorrida em metros?');
  const tempo = readline.questionInt('Qual foi o tempo em segundos?');

  velocidadeMedia(distancia, tempo);
}

main();