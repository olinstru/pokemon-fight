import {
	addPokemonToSquad,
	readPokemonSquad,
	generateRandomPV,
	generateRandomForce
} from '$lib/server/fighters';
import { getPokemonData } from '$lib/server/helpers.js';
import { fail } from '@sveltejs/kit';
import { randomUUID } from 'crypto';

export function load({ depends }) {
	depends('squad:all');
	const squad = readPokemonSquad();
	return { squad };
}

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const name = data.get('pokemonName')?.toString();
		const id = Number(data.get('pokemonId'));
		const uuid = randomUUID();
		const pv = generateRandomPV();
		const force = generateRandomForce();
		const points = 0;
		const img = getPokemonData(id);

		if (name) {
			addPokemonToSquad({
				name: name,
				id: id,
				uuid: uuid,
				pv: pv,
				force: force,
				points: points,
				img: img
			});
		} else {
			return fail(400, {
				name,
				uuid,
				incorrect: true
			});
		}
	}
};
