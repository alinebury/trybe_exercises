import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.handlePokemon = this.handlePokemon.bind(this);
    this.handleNext = this.handleNext.bind(this);

    this.state = {
      position: 0,
      type: '',
    }
  }

  handlePokemon(event){
    const evento = event.target.innerText
    evento !== 'All' ? this.setState({type: evento}) : this.setState({type: ''})
  }

  handleNext(){
    const { position } = this.state
    const tam = pokemons.length - 1
 
    position === tam ? this.setState({position: 0}) : this.setState((previus) => ({
      position: previus.position + 1
    }))
    
  }

  render() {
    const { pokemons } = this.props;
    return (
      <div>
        <div className='pokemons'>
          {pokemons.filter((pokemon) => pokemon.type.includes(this.state.type))
          .map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)[this.state.position]}
        </div>

        <div className='butons'>
          <button onClick={this.handlePokemon}>All</button>
          <button onClick={this.handlePokemon}>Electric</button>
          <button onClick={this.handlePokemon}>Fire</button>
          <button onClick={this.handlePokemon}>Bug</button>
          <button onClick={this.handlePokemon}>Poison</button>
          <button onClick={this.handlePokemon}>Psychic</button>
          <button onClick={this.handlePokemon}>Normal</button>
          <button onClick={this.handlePokemon}>Dragon</button>

          <button onClick={this.handleNext}>Próximo Pokemon</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;