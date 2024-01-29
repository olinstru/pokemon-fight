import { getFighterData, readPokemonSquad } from '$lib/server/fighters';
import { readLeaderboard } from '$lib/server/leaderboard';

export function load({ params }) {
	const uuid = params.uuid;
	const pokemon = getFighterData(uuid);
	const squad = readPokemonSquad();
	const leaderboard = readLeaderboard();
	console.log(leaderboard);

	return {
		uuid,
		pokemon,
		squad,
		leaderboard
	};
}
