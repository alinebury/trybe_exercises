const readline = require('readline-sync');

function logResult(number, res) {
  if(number === res) {
    return console.log(`Opa, não foi dessa vez. O número era ${number}`);
  }
  
  return console.log('Parabéns, número correto');
}

function main() {
  const random =  parseInt(Math.random() * 10, 10);

  const resposta = readline.questionInt('Digite um número entre 0 e 10: ');

  logResult(random, resposta);

  const novamente = readline.question('Deseja jogar novamente? Digite s ou qualquer tecla para sair: ');

  if( novamente !== 's') return console.log('Até a próxima!');

  main();
}

main();