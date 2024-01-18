<script lang="ts">
	let selectedId: number = 0;
	let selectedName: string = '';

	export let data;
	const pokemons = data.pokemons;

	$: selectedPokemon = pokemons.find((pokemon) => pokemon.id === selectedId);

	const handleSelectChange = (event: any) => {
		selectedId = +event.target.value; // Convert to number
		selectedName = pokemons[selectedId - 1]?.name || '';
		console.log(selectedName, selectedId);
	};
</script>

<h1>Create your Pokemon fighter!</h1>

<div class="container">
	<form method="POST">
		<select name="pokemonId" on:change={handleSelectChange}>
			<option value="">Choose a pokemon</option>
			{#each pokemons as pokemon}
				<option value={pokemon.id}>{pokemon.name}</option>
			{/each}
		</select>
		<div>
			<h3>Selected pokemon:</h3>
			{#if selectedPokemon}
				<img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
			{/if}
		</div>
		<input type="text" name="pokemonName" placeholder="type here" value={selectedName} />
		<button>Create</button>
	</form>
</div>

<style>
	.container {
		display: flex;
	}

	select {
		width: 200px;
	}
</style>
