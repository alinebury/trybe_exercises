const readline = require('readline-sync');

function fatorial(num) {
  let fatorial = num;

  for (let index = fatorial-1; index > 0; index -= 1) {
    fatorial *= index;
  }

  return console.log(`Resultado fatorial: ${fatorial}`);
};

function main() {
  const num = readline.questionInt('Informe um valor maior que zero: ');

  fatorial(num);
}

main();
