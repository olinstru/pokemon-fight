import type { FightersInSquad } from '$lib/types';
import { readFileSync, writeFileSync } from 'fs';

let squad: FightersInSquad[] = readPokemonSquad();

export function addPokemonToSquad(pokemon: FightersInSquad) {
	squad.push(pokemon);
	saveSquad();
}

export function updatePokemon(uuid: string, points: number) {
	const pokemon = squad.find((pokemon) => pokemon.uuid === uuid);
	if (pokemon) {
		pokemon.points = points;
		saveSquad();
	}
}

export function deletePokemonFromSquad(uuid: string) {
	squad = squad.filter((pokemon) => pokemon.uuid !== uuid);
	saveSquad();
}

export function readPokemonSquad() {
	try {
		const data = readFileSync('generated/squad.json', 'utf-8');
		return JSON.parse(data) as FightersInSquad[];
	} catch (e) {
		console.log('No file');
		return [];
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

export function getFighterData(uuid: string | null) {
	const pokemonFighter = squad.find((pokemon) => pokemon.uuid === uuid);
	return pokemonFighter;
}

export function generateRandomPV() {
	const minPV = 50;
	const maxPV = 200;
	return Math.floor(Math.random() * (maxPV - minPV + 1)) + minPV;
}

export function generateRandomForce() {
	const minForce = 20;
	const maxForce = 50;
	return Math.floor(Math.random() * (maxForce - minForce + 1)) + minForce;
}

export function getChampion() {
	const sortedSquad = squad.slice().sort((a, b) => b.points - a.points);

	if (sortedSquad.length === 0) {
		// Handle the case where the squad is empty
		return null;
	}

	const champion = sortedSquad[0]; // The Pokémon with the highest points is the champion

	return champion;
}

