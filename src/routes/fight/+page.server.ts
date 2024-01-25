import { readPokemonSquad, randomFighterForce } from '$lib/server/fighters.js';
import { getFighterData } from '$lib/server/fighters.js';

export function load({ url }) {
	const uuid1 = url.searchParams.get('uuid1');
	const uuid2 = url.searchParams.get('uuid2');
	const squad = readPokemonSquad();

	const pokemonFighter1 = getFighterData(uuid1);
	const pokemonFighter2 = getFighterData(uuid2);

	const fighter1Force = randomFighterForce(pokemonFighter1.force);
	const fighter2Force = randomFighterForce(pokemonFighter2.force);

	return {
		uuid1,
		uuid2,
		squad,
		pokemonFighter1,
		pokemonFighter2,
		fighter1Force,
		fighter2Force
	};
}
