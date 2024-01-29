import { json } from "@sveltejs/kit";
import { deletePokemonFromSquad } from "$lib/server/fighters";

export async function DELETE({ params }) {
    const uuid = params.uuid;
    const squadSize = deletePokemonFromSquad(uuid);
    return json({squadSize})
}