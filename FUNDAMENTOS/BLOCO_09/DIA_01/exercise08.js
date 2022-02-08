const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function pokemonPrint(error, message) {
  if (error) {
    console.log(error);
  } else {
    console.log(message);
  }
}

function getPokemonDetails(poke, callback) {
  setTimeout(() => {
    if (pokemons.find((pokemon) => pokemon.name === poke) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find((pokemon) => pokemon.name === poke);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails('Bulbasaur', pokemonPrint);

module.exports = {
  getPokemonDetails,
};