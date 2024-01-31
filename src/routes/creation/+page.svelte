<script lang="ts">
	let selectedId: number = 0;
	let selectedName: string = '';

	export let data;
	let pokemons = data.pokemons.slice(); // Create a copy to avoid modifying the original data

	// Sort the pokemons array alphabetically by name
	pokemons = pokemons.sort((a, b) => a.name.localeCompare(b.name));

	// Uppercase the first letter of each Pokémon name
	pokemons = pokemons.map((pokemon) => ({
		...pokemon,
		name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
	}));

	// Sort the pokemons array alphabetically by name
	pokemons = pokemons.sort((a, b) => a.name.localeCompare(b.name));

	$: selectedPokemon = pokemons.find((pokemon) => pokemon.id === selectedId);

	const handleSelectChange = (event: any) => {
		selectedId = +event.target.value;
		selectedName = pokemons[selectedId - 1]?.name || '';
		console.log(selectedName, selectedId);
	};
</script>

<h1>Create your Pokemon fighter!</h1>

<div class="container">
	<form method="POST">
		<select name="pokemonId" on:change={handleSelectChange}>
			<option value="">Choose a Pokemon</option>
			{#each pokemons as pokemon}
				<option value={pokemon.id}>{pokemon.name}</option>
			{/each}
		</select>
		<div>
			{#if selectedPokemon}
				<h3>Selected pokemon:</h3>
				<div class="card text-dark" style="width: 22rem;">
					<img
						class="card-img-top small"
						style="max-width:50%; margin: auto;"
						src={selectedPokemon.sprites.front_default}
						alt={selectedPokemon.name}
					/>
					<div class="card-body">
						<h5 class="card-title">{selectedName}</h5>
						<p class="card-text">
							You can change your Pokemon's name.
							<br />
							Life and force points are random.
						</p>
						<input type="text" name="pokemonName" placeholder="type here" value={selectedName} />
						<button class="btn btn-success">Create</button>
					</div>
				</div>
			{/if}
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
</style>
