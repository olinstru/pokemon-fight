<script lang="ts">
	import { enhance } from '$app/forms';

	let selectedPokemon = '';

	export let data;
	export let form;
	// $: squad = data.squad;

	const handleSelectChange = (event) => {
		selectedPokemon = event.target.value;
	};
</script>

<h1>Création de personnage</h1>

<div class="container">
	<form>
		<select name="pokemons" id="pokemons" on:change={handleSelectChange}>
			<option value="">Choose a pokemon</option>
			{#each data.pokemons as pokemon}
				<option value={pokemon.name}>{pokemon.name}</option>
			{/each}
		</select>
	</form>
	<div>
		<h2>Selected pokemon: {selectedPokemon}</h2>
		<!-- <form method="post" use:enhance>
			<input name="name" class:error={form?.uuid === uuid} />
			<input type="hidden" name="uuid" value={uuid} />
			<button>Renommer</button>
		</form> -->
		<input type="text" />
		<button>Rename</button>
	</div>
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
