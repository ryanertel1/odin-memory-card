import Scoreboard from './Scoreboard.jsx'
import TileCard from './TileCard.jsx'
import '../styles/GameController.css';

const GameController = ({ pokemonGroup }) => {
    return(
        <>
            <Scoreboard></Scoreboard>
            <div>
                {pokemonGroup.map(pokemon => <TileCard name={pokemon.name} key={pokemon.pokeID} image={pokemon.image}></TileCard>)}
            </div>
        </>

    )
}

export default GameController;