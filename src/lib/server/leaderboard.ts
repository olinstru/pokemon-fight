import type { FightersInSquad } from '$lib/types';
import { readFileSync, writeFileSync } from 'fs';

const squad: FightersInSquad[] = readLeaderboard();

export function addToLeaderboard(pokemon: FightersInSquad) {
	squad.push(pokemon);
	saveLeaderboard();
}

export function readLeaderboard() {
	try {
		const data = readFileSync('generated/leaderboard.json', 'utf-8');
		return JSON.parse(data) as FightersInSquad[];
	} catch (e) {
		console.log('No file');
		return [];
	}
}

export function saveLeaderboard() {
	writeFileSync('./generated/squad.json', JSON.stringify(squad));
}