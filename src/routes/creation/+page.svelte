<script lang="ts">
	import { enhance } from '$app/forms';
	import Pokemon from '$lib/components/Pokemon.svelte';

	let selectedId: number;
	let selectedName = '';

	export let data;
	const pokemon = data.pokemons;

	function getPokemonInfo(pokemonId: number) {
		return pokemon.find((pokemon) => pokemon.id === pokemonId);
	}

	const handleSelectChange = (event) => {
		selectedId = event.target.value;
		const pokemon = data.pokemons[selectedId - 1];
		selectedName = pokemon.name;
		console.log(selectedName, selectedId);
	};
</script>

<h1>Create your Pokemon fighter!</h1>

<div class="container">
	<form method="POST">
		<select name="pokemonId" on:change={handleSelectChange}>
			<option value="">Choose a pokemon</option>
			{#each data.pokemons as pokemon}
				<option value={pokemon.id}>{pokemon.name}</option>
			{/each}
		</select>

		<div>
			<h3>Selected pokemon:</h3>
			<!-- <img
				src={getPokemonInfo(selectedPokemonId).sprites.front_default}
				alt="Pokemon"
				style="max-width: 100%; margin-bottom: 10px;"
			/> -->
			
			<input type="text" name="pokemonName" placeholder="type here" value={selectedName} />
			<button>Create</button>
		</div>
	</form>
</div>

<style>
	.container {
		display: flex;
	}
	select {
		width: 200px;
	}

	/* .pokemon-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 20px;
	} */
</style>
