import { deletePokemonFromSquad, readPokemonSquad } from '$lib/server/fighters';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(readPokemonSquad());
}

export async function DELETE({ params }) {
	const uuid = params.id;
	const bagLength = deletePokemonFromSquad(uuid);
	return json({ bagLength });
}
