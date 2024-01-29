import { readPokemonSquad } from '$lib/server/fighters';

export function load({ depends }) {
	depends('squad:all');
	const squad = readPokemonSquad();
	return { squad };
}
