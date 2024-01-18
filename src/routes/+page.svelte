<script lang="ts">
	import Fighter from '$lib/components/Fighter.svelte';
	import { onMount } from 'svelte';

	export let data;
	$: fighter = data.squad;

	let selectedFighters: any = [];
	let isFightButtonDisabled: boolean = true;

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

<h1>Pokemon Fight!</h1>

<div class="top-section">
	<h2>Choose 2 fighters:</h2>
	<button hidden={isFightButtonDisabled}>Start fight!</button>
</div>

<div class="squad">
	{#each fighter as fighter (fighter.uuid)}
		<a
			href="/"
			on:click={() => selectFighters(fighter)}
			class:selected={selectedFighters.includes(fighter)}
		>
			<Fighter {fighter} />
		</a>
	{/each}
</div>

<style>
	.squad {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 40px;
	}

	.top-section {
		margin-bottom: 50px;
	}

	a {
		text-decoration: none;
	}

	.selected {
		background-color: lightgoldenrodyellow;
		border-radius: 10px; /* Adjust the color as needed */
	}

	button {
		background-color: orange;
		border-radius: 10px;
		height: 30px;
		width: 150px;
	}
</style>
