import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <h1> Pokédex </h1>
      <nav>
        <Link className="link" to="/"> Home </Link>
        <Link className="link" to="/about"> About </Link>
        <Link className="link" to="/favorites"> Favorite Pokémons </Link>
      </nav>
      
      <switch>
        <Route path="/" render={(props) => <Pokedex{...props } pokemons={pokemons}/>}/>
      </switch>

    </div>
  );
}

export default App;