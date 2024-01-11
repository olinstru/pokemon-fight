import pokemons from '$lib/pokemons.json';
import { readPokemonSquad } from '$lib/server/fighters'

export function load({ depends }) {
    const bag = readPokemonSquad();
    depends("bag:all");

    return {
        pokemons,
        bagSize: bag.length
    };
}
