const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', path: './imc.js' },
  { name: 'Calcular velocidade média', path: './velocidade.js' },
  { name: 'Jogo de adivinhação', path: './sorteio.js' },
];

function escolherScript() {

  const enunciado = 'Escolha um número para executar o script correspondente\n';
  const mensagem = scripts
    .reduce((message, script, index) => `${message}${index + 1} - ${script.name}\n`, enunciado);

  const numeroEscolhido = readline.questionInt(mensagem) - 1;

  const script = scripts[numeroEscolhido];

  return script;
}

function main() {
  const script = escolherScript();

  if (!script) return console.log('Número inválido. Saindo');

  require(script.path);
}

main();