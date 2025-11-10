import { useState } from 'react';

export default function pokemonHelper() {
    const [pokemon, setPokemon] = useState([]);
    const TOTAL_POKEMON = 1025 - 1; //Current highest number of pokemon as of October 2025 minus 1 to prevent overflow

    const getPokemon = async ( pokeID ) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
        const { name, sprites } = await response.json();
        const image = sprites["front_default"];
        return {name, image, pokeID};
    };

    const getPokemonGroup = async (amount) => {
        const pokemonGroup = [];
        let tries = 0;

        while (pokemonGroup.length < amount && tries < 100) {
            let newID = Math.floor(Math.random() * TOTAL_POKEMON) + 1;

            if (pokemonGroup.find(({pokeID}) => pokeID === newID )) {
                tries++;
            }
            else {
                pokemonGroup.push(newID);
            }
        }

        return await Promise.all(pokemonGroup.map(getPokemon));
    }

    return { pokemon, setPokemon, getPokemonGroup };
}