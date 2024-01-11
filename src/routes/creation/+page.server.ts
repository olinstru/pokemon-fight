import { addPokemonToSquad, readPokemonSquad, renamePokemon } from '$lib/server/fighters'
import { fail } from '@sveltejs/kit';
import { randomUUID } from "crypto";


export function load({ depends }) {
	depends("squad:all");
	const squad = readPokemonSquad()
	return { squad }
}
export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		console.log(data)
		const name = data.get('pokemonName')?.toString();
		const id = Number(data.get('pokemonId'));
		const uuid = randomUUID();

		if (name) {
			addPokemonToSquad({ name: name, id: id, uuid: uuid })
		} else {
			return fail(400, {
				name, uuid, incorrect: true
			})
		}


	}
}
