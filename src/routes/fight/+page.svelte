<script lang="ts">
	import Fighter from '$lib/components/Fighter.svelte';
	import { onMount } from 'svelte';

	export let data;
	const fighter1: any = data.pokemonFighter1;
	const fighter2: any = data.pokemonFighter2;
	const pokemonFighters = [fighter1, fighter2];
	const fighter1Force = data.fighter1Force;
	const fighter2Force = data.fighter2Force;
	console.log(pokemonFighters, fighter1Force, fighter2Force);

	// onMount(() => {
	// 	setInterval(() => {}, 2000);
	// });

	console.log(fighter1.pv);
	console.log(fighter2.pv);
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
