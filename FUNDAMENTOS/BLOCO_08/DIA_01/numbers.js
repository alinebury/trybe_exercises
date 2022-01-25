const numbersCheck = (userNumber, number) => (userNumber === number ? 'Parabéns você ganhou!': 'Tente novamente!');

const result = (userNumber, callback) => {
  const number = Math.floor(Math.random() * 5) + 1;

  return callback(userNumber, number);
};

console.log(result(2,numbersCheck));
