<script lang="ts">
	import { invalidate } from '$app/navigation';
	import Fighter from '$lib/components/Fighter.svelte';
	import { onMount } from 'svelte';

	export let data;
	$: fighter = data.squad;

	let selectedFighters: any[];
	$: selectedFighters = [];
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

	async function callDeleteEndpoint(uuid: string) {
		const response = await fetch(`/${uuid}`, { method: 'DELETE' });
		const newSquadSize = await response.json();
		await invalidate('squad:all');
		console.log(newSquadSize, response);
	}

	onMount(() => {
		selectedFighters = [];
		isFightButtonDisabled = true;
	});
</script>

<h1>Pokemon Fight!</h1>

<div class="top-section">
	<h2>Choose 2 fighters:</h2>
	{#if !isFightButtonDisabled}
		<a
			href="/fight?uuid1={selectedFighters[0]?.uuid}&uuid2={selectedFighters[1]?.uuid}"
			class="startFightLink">Start fight!</a
		>
	{/if}
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
		<button
			style="font-size:24px"
			on:click={() => {
				callDeleteEndpoint(fighter.uuid);
			}}><i class="fa fa-trash-o"></i></button
		>
	{/each}
</div>

<style>
	.squad {
		/* display: grid; */
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 40px;
	}

	.top-section {
		margin-bottom: 50px;
		display: flex;
		align-items: center;
	}

	a {
		text-decoration: none;
	}

	.startFightLink {
		margin-left: 40px;
		font-weight: bold;
		font-size: 1.2rem;
	}

	.selected {
		background-color: lightgoldenrodyellow; /* Change the border color and width as needed */
		border-radius: 10px;
	}
</style>
