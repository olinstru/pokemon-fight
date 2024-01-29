import { getFighterData, readPokemonSquad } from '$lib/server/fighters';

export function load({ params }) {
	// const uuid = url.searchParams.get('uuid');
    const uuid = params.uuid;
	const pokemon = getFighterData(uuid);
	const squad = readPokemonSquad();
	console.log(uuid);

	return {
		pokemon,
		squad
	};
}
