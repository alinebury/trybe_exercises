// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'laranja', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['abacaxi', 'mimosa', 'manga'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));