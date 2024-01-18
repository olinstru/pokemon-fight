import pokemons from '$lib/pokemons.json';
import { readPokemonSquad } from '$lib/server/fighters'

export function load({ depends }) {
    const squad = readPokemonSquad();
    depends("squad:all");

    return {
        pokemons,
        squadSize: squad.length
    };
}
