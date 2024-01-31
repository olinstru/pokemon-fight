<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: fighter = data.squad;

	let selectedFighters: any[];
	$: selectedFighters = [];
	let isFightButtonDisabled: boolean = true;

	async function callDeleteEndpoint(uuid: string) {
		const response = await fetch(`/${uuid}`, { method: 'DELETE' });
		const newSquadSize = await response.json();
		await invalidate('squad:all');
		console.log(newSquadSize, response);
	}

	function selectFighters(fighter: any) {
		if (selectedFighters.includes(fighter)) {
			selectedFighters = selectedFighters.filter((selected: any) => selected !== fighter);
		} else if (selectedFighters.length < 2) {
			selectedFighters = [...selectedFighters, fighter];
		}
		const conditionsMet: boolean = selectedFighters.length === 2;
		isFightButtonDisabled = !conditionsMet;
		console.log(selectedFighters);
	}

	onMount(() => {
		selectedFighters = [];
		isFightButtonDisabled = true;
	});
</script>

<div class="top-section">
	<h1>Welcome to Pokemon Fight!</h1>
	<h3>Choose 2 fighters:</h3>
	{#if !isFightButtonDisabled}
		<button
			class="btn btn-danger btn-lg"
			onclick="window.location.href='/fight?uuid1={selectedFighters[0]
				?.uuid}&uuid2={selectedFighters[1]?.uuid}';"
		>
			Fight!
		</button>
	{/if}
</div>

<div class="squad">
	{#each fighter as fighter (fighter.uuid)}
		<div class="fighterCard">
			<div
				class="card text-dark"
				style="width: 22rem;"
				class:selected={selectedFighters.includes(fighter)}
			>
				<img
					class="card-img-top small"
					style="max-width:50%; margin: auto;"
					src={fighter.img}
					alt={fighter.name}
				/>
				<div class="card-body">
					<h5 class="card-title" style="text-align: center;">{fighter.name}</h5>
					<p class="card-text" style="text-align: center;">
						Health: {fighter.pv}
					</p>
					<p class="card-text" style="text-align: center;">
						Force: {fighter.force}
					</p>
					<p class="card-text" style="text-align: center;">
						Points: {fighter.points}
					</p>
					<button
						class="btn btn-outline-secondary"
						on:click={() => {
							callDeleteEndpoint(fighter.uuid);
						}}
						><i class="fa fa-trash-o"></i>
					</button>

					<button
						type="button"
						class="btn btn-outline-success"
						on:click={() => selectFighters(fighter)}>Select</button
					>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.squad {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 50px;
		margin: 0 20px;
	}

	.fighterCard {
		display: flex;
		justify-content: center;
		text-align: center;
	}

	h1,
	h3 {
		margin-bottom: 30px;
	}

	.top-section {
		text-align: center;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.selected {
		background-color: #eeeeee;
	}
</style>
