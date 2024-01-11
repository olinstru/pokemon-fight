import { readPokemonSquad, renamePokemon } from '$lib/server/fighters'
import { fail } from '@sveltejs/kit';

export function load({ depends }) {
    depends("bag:all");
    const bag = readPokemonSquad()
    // console.log(bag)
    return { bag }
}
export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name')?.toString();
		console.log(name);

		const uuid = data.get('uuid')?.toString()
		console.log(uuid);

		if (name && uuid) {
			renamePokemon(uuid, name)
		} else {
			return fail(400, {
				name, uuid, incorrect: true
			})
		}


	}
}
