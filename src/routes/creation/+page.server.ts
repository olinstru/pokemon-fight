import { addPokemonToSquad, readPokemonSquad, renamePokemon } from '$lib/server/fighters'
import { fail } from '@sveltejs/kit';
import { randomUUID } from "crypto";


export function load({ depends }) {
	depends("squad:all");
	const squad = readPokemonSquad()
	console.log(squad)
	return { squad }
}
export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const name = data.get('pokemonName')?.toString();
		const uuid = randomUUID();

		console.log("pokemon name:", name)
		if (name) {
			addPokemonToSquad({name: name, uuid: uuid})
		} else {
			return fail(400, {
				name, uuid, incorrect: true
			})
		}


	}
}
