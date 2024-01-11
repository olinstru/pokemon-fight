import type { FightersInSquad } from "$lib/types";
import { readFileSync, writeFileSync } from "fs";

let squad: FightersInSquad[] = readPokemonSquad()

export function addPokemonToSquad(pokemon: FightersInSquad) {
    squad.push(pokemon);
    saveSquad();
}

export function deletePokemonFromSquad(uuid: string) {
    squad = squad.filter((pokemon) => pokemon.uuid !== uuid);
    saveSquad();
}

export function readPokemonSquad() {
    try {
        const data = readFileSync("generated/squad.json", "utf-8")
        return JSON.parse(data) as FightersInSquad[]
    } catch (e) {
        console.log("No file")
        return []
    }
}

export function saveSquad() {
    writeFileSync('./generated/squad.json', JSON.stringify(squad));
}

export function renamePokemon(uuid: string, newName: string) {
    const pokemon = squad.find((pokemon) => pokemon.uuid === uuid);
    if (pokemon) {
        pokemon.name = newName;
        saveSquad();
    }
}
