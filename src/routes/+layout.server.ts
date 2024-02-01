import pokemons from '$lib/pokemons.json';
import { getChampion, readPokemonSquad } from '$lib/server/fighters'

export function load({ depends }) {
    const squad = readPokemonSquad();
    const champion = getChampion();
    depends("squad:all");

    return {
        pokemons,
        squadSize: squad.length,
        champion: champion
    };
}
