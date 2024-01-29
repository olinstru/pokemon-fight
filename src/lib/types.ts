export type FightersInSquad = {
	id: number;
	name: string;
	uuid: string;
	pv: number;
	force: number;
	points: number;
	img: string;
};

export type Leaderboard = {
	winnerName: string;
	winnerUUID: string;
	loserUUID: string;
};
