import { readPokemonSquad, getFighterData, updatePokemon } from '$lib/server/fighters';
import { addToLeaderboard } from '$lib/server/leaderboard';
import { fail, redirect } from '@sveltejs/kit';

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

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const winner = data.get('winner')?.toString();
		// const winnerUUID = data.get('winnerUUID')?.toString();
		const uuid1 = data.get('uuid1')?.toString();
		const uuid2 = data.get('uuid2')?.toString();
		const fighter1Points = Number(data.get('fighter1Points'));
		const fighter2Points = Number(data.get('fighter2Points'));

		if (winner && uuid1 && uuid2) {
			console.log('Combat saved to leaderboard');
			addToLeaderboard({ winner, uuid1, uuid2 });
			updatePokemon(uuid1, fighter1Points);
			updatePokemon(uuid2, fighter2Points);
		} else {
			return fail(400, {
				incorrect: true
			});
		}
	}
};
