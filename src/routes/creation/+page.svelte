<script lang="ts">
	import { enhance } from '$app/forms';

	let selectedPokemon = '';

	export let data;
	// $: squad = data.squad;

	const handleSelectChange = (event) => {
		selectedPokemon = event.target.value;
		console.log(selectedPokemon);
	};
</script>

<h1>Création de personnage</h1>

<div class="container">
	<form method="POST">
		<select name="pokemons" id="pokemons" on:change={handleSelectChange}>
			<option value="">Choose a pokemon</option>
			{#each data.pokemons as pokemon}
				<option value={pokemon.name}>{pokemon.name}</option>
			{/each}
		</select>
		<div>
			<h2>Selected pokemon: {selectedPokemon}</h2>

			<input type="text" name="pokemonName" placeholder="type here" value={selectedPokemon} />
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
