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

	onMount(() => {
		const intervalId = setInterval(() => {
			let fighter1Force = randomFighterForce(fighter1.force);
			if (fighter2.pv >= fighter1Force) {
				fighter2.pv -= fighter1Force;
			} else {
				console.log('Le combat est terminé. Fighter 2 a perdu.');
				fighter2.pv = 0;
				clearInterval(intervalId);
				return;
			}

			let fighter2Force = randomFighterForce(fighter2.force);
			if (fighter1.pv >= fighter2Force) {
				fighter1.pv -= fighter2Force;
			} else {
				console.log('Le combat est terminé. Fighter 1 a perdu.');
				fighter1.pv = 0;
				clearInterval(intervalId);
				return;
			}
		}, 2000);
	});
</script>

<h1>Fight between {fighter1.name} & {fighter2.name}!</h1>

<div class="squad">
	{#each pokemonFighters as fighter}
		<div class="fighter">
			<Fighter {fighter} />
			<div class="life-bar">
				<div class="current-life" id="pokemonLife" style="width: {fighter.pv}px;">{fighter.pv}</div>
			</div>
		</div>
	{/each}
</div>

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
</style>
