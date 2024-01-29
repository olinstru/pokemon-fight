import { readPokemonSquad } from '$lib/server/fighters';

export function load() {
	const squad = readPokemonSquad();
	return { squad };
}
