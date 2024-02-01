import { getChampion, readPokemonSquad } from '$lib/server/fighters';

export function load() {
	const squad = readPokemonSquad();
	const champion = getChampion();
	return { squad, champion };
}