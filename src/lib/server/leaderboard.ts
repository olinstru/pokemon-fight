import type { Leaderboard } from '$lib/types';
import { readFileSync, writeFileSync } from 'fs';

const leaderboard: Leaderboard[] = readLeaderboard();

export function addToLeaderboard(combatData: Leaderboard) {
	leaderboard.push(combatData);
	saveLeaderboard();
}

export function readLeaderboard() {
	try {
		const data = readFileSync('generated/leaderboard.json', 'utf-8');
		return JSON.parse(data) as Leaderboard[];
	} catch (e) {
		console.log('No file');
		return [];
	}
}

export function saveLeaderboard() {
	writeFileSync('./generated/leaderboard.json', JSON.stringify(leaderboard));
}