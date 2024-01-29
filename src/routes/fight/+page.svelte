<script lang="ts">
	import Fighter from '$lib/components/Fighter.svelte';
	import { onMount } from 'svelte';

	export let data;
	$: fighter1 = data.pokemonFighter1;
	$: fighter2 = data.pokemonFighter2;
	$: pokemonFighters = [fighter1, fighter2];

	function randomFighterForce(fighterForce: number) {
		const minForce: number = 0;
		return Math.floor(Math.random() * (fighterForce - minForce + 1)) + minForce;
	}

	let winnerName: string;
	let winnerUUID: string;
	let loserUUID: string;
	let isTie: boolean;

	onMount(() => {
		const intervalId = setInterval(() => {
			let fighter1Force = randomFighterForce(fighter1.force);
			if (fighter2.pv >= fighter1Force) {
				fighter2.pv -= fighter1Force;
			} else {
				console.log('Le combat est terminé. Fighter 1 a gagné.');
				fighter2.pv = 0;
				fighter1.points += 3;
				winnerName = fighter1.name;
				winnerUUID = fighter1.uuid;
				loserUUID = fighter2.uuid;
				console.log('winner:', winnerName);

				clearInterval(intervalId);
				return;
			}

			let fighter2Force = randomFighterForce(fighter2.force);
			if (fighter1.pv >= fighter2Force) {
				fighter1.pv -= fighter2Force;
			} else {
				console.log('Le combat est terminé. Fighter 2 a gagné.');
				fighter1.pv = 0;
				fighter2.points += 3;
				winnerName = fighter2.name;
				winnerUUID = fighter2.uuid;
				loserUUID = fighter1.uuid;
				console.log('winner:', winnerName);

				clearInterval(intervalId);
				return;
			}

			if (fighter1.pv === 0 && fighter2.pv === 0) {
				console.log("Le combat est terminé. C'est une égalité !");
				isTie = true;
				winnerName = 'Tie';
				fighter1.points += 1;
				fighter2.points += 1;
				clearInterval(intervalId);
				return;
			}
		}, 200);
	});
</script>

<form method="POST">
	{#if !winnerName}
		<h1>
			Fight between {fighter1.name} & {fighter2.name}!
		</h1>
	{:else if isTie}
		<h1>The combat is finished. It's a tie!</h1>
	{:else}
		<h1>The combat is finished. The winner is {winnerName}!</h1>
		<button>New combat</button>
	{/if}

	<div class="squad">
		{#each pokemonFighters as fighter}
			<div class="fighter">
				<Fighter {fighter} />
				<div class="life-bar">
					<div class="current-life" id="pokemonLife" style="width: {fighter.pv}px;">
						{fighter.pv}
					</div>
				</div>
			</div>
		{/each}
	</div>

	<input type="text" name="winnerName" hidden value={winnerName} />
	<input type="text" name="winnerUUID" hidden value={winnerUUID} />
	<input type="text" name="loserUUID" hidden value={loserUUID} />
	<input type="text" name="uuid1" hidden value={fighter1.uuid} />
	<input type="text" name="uuid2" hidden value={fighter2.uuid} />
	<input type="text" name="fighter1Points" hidden value={fighter1.points} />
	<input type="text" name="fighter2Points" hidden value={fighter2.points} />
</form>

<style>
	h1 {
		text-align: center;
		margin-top: 50px;
		margin-bottom: 50px;
	}
	.squad {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.fighter {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.life-bar {
		width: 200px;
		height: 20px;
		border: 1px solid #000;
		margin-top: 20px;
		overflow: hidden;
	}

	.current-life {
		height: 100%;
		background-color: #4caf50; /* Green color for health */
		transition: width 0.5s; /* Smooth transition for changing width */
		text-align: center;
	}

	button {
		width: 170px;
		height: 40px;
		font-size: 1.1rem;
		background-color: orange;
		display: block;
		margin: 0 auto;
		border-radius: 10px;
	}
</style>
