import { readPokemonSquad } from '$lib/server/fighters';
import { getFighterData } from '$lib/server/fighters';
import { redirect } from '@sveltejs/kit';

export function load({ url }) {
	const uuid1 = url.searchParams.get('uuid1');
	const uuid2 = url.searchParams.get('uuid2');
	const squad = readPokemonSquad();

	const pokemonFighter1 = getFighterData(uuid1);
	const pokemonFighter2 = getFighterData(uuid2);

	if (!pokemonFighter1 || !pokemonFighter2) {
		throw redirect(300, '/');
	}

	return {
		uuid1,
		uuid2,
		squad,
		pokemonFighter1,
		pokemonFighter2
	};
}
