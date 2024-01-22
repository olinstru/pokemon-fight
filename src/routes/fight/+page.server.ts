import { readPokemonSquad } from '$lib/server/fighters.js';
import { getFighterData } from '$lib/server/fighters.js';

export function load({ url }) {
	const uuid1 = url.searchParams.get('uuid1');
	const uuid2 = url.searchParams.get('uuid2');
	const squad = readPokemonSquad();

	console.log('uuid1', uuid1, 'uuid2', uuid2);

	const pokemonFighter1 = getFighterData(uuid1);
	const pokemonFighter2 = getFighterData(uuid2);

	return { uuid1, uuid2, squad, pokemonFighter1, pokemonFighter2 };
}
