import { useState } from 'react'
import Scoreboard from './Scoreboard.jsx'
import TileCard from './TileCard.jsx'
import '../styles/GameController.css';

const GameController = ({ pokemonGroup, restartGame }) => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickList, setClickList] = useState([]);

    const handleCardClick = (cardName) => {
        var newClickList = clickList;

        if (!clickList.includes(cardName)) {
            newClickList.push(cardName);
            setClickList(newClickList);
            const newScore = score + 1;
            setScore(newScore);
            shuffleCards();
        } else {
            if(highScore < score) { setHighScore(score) };
            setClickList([]);
            setScore(0);
            restartGame();
        }
    }

    const shuffleCards = () => {
        const oldPokemonGroup = pokemonGroup;
        var newPokemonGroup = pokemonGroup;
        var n = pokemonGroup.length;

        while (n) {
            const randIndex = Math.floor(Math.random() * n);
            n--;
            newPokemonGroup.push(oldPokemonGroup[randIndex]);
            oldPokemonGroup.splice(randIndex, 1);
        }

        console.log(newPokemonGroup);
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