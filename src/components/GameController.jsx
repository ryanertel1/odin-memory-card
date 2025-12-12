import { useState } from 'react'
import Scoreboard from './Scoreboard.jsx'
import TileCard from './TileCard.jsx'
import '../styles/GameController.css';

const GameController = ({ pokemonGroup }) => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const handleCardClick = (cardName) => {
        console.log(cardName + ' clicked')
    }
    
    return(
        <>
            <Scoreboard score={score} highScore={highScore}></Scoreboard>
            <div className='gameScreen'>
                {pokemonGroup.map(pokemon => <TileCard name={pokemon.name} key={pokemon.pokeID} image={pokemon.image} onChildClick={handleCardClick}></TileCard>)}
            </div>
        </>

    )
}

export default GameController;