import { useState } from 'react'
import './App.css'
import GameController from './components/GameController.jsx'
import pokemonHelper from './pokemonHelper.jsx'

function App() {
  const initializeGame = async (amount) => {
    const randomPokemon = getPokemonGroup(amount);
    setPokemon(await randomPokemon)
    //console.log(randomPokemon);
  };

  const { pokemon, setPokemon, getPokemonGroup } = pokemonHelper();

  const handleStartClick = () => {
    initializeGame(8);
  }

  return (
    <>
      <div>
        <button onClick={handleStartClick}>Start Game</button>
        <GameController pokemonGroup={pokemon}></GameController>
      </div>
    </>
  )
}

export default App
