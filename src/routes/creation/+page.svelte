<script lang="ts">
	let selectedId: number = 0;
	let selectedName: string = '';

	export let data;
	let pokemons = data.pokemons.slice();

	pokemons = pokemons.sort((a, b) => a.name.localeCompare(b.name));

	pokemons = pokemons.map((pokemon) => ({
		...pokemon,
		name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
	}));

	$: selectedPokemon = pokemons.find((pokemon) => pokemon.id === selectedId);

	const handleRadioChange = (event: any) => {
		selectedId = +event.target.value;
		selectedName = pokemons.find((pokemon) => pokemon.id === selectedId)?.name || '';
		console.log(selectedName, selectedId);
	};
</script>

<h1>Create your Pokemon fighter!</h1>

<form method="POST">
	{#if selectedPokemon}
		<h3>Selected Pokemon:</h3>
		<div class="selectedPokemon">
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
						Life and force points are random.
					</p>
					<input type="text" name="pokemonId" hidden value={selectedPokemon.id} />

					<div class="input-group mb-3">
						<input
							type="text"
							class="form-control"
							name="pokemonName"
							placeholder="Type here"
							bind:value={selectedName}
						/>
						<div class="input-group-append">
							<button class="btn btn-success">Create</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
	<div class="pokemon-grid">
		{#each pokemons as pokemon}
			<label class="pokemon-card">
				<input
					type="radio"
					name="selectedPokemon"
					bind:group={selectedId}
					value={pokemon.id}
					on:change={handleRadioChange}
				/>
				<img
					src={pokemon.sprites.front_default}
					alt={pokemon.name}
					class="card-img-top small"
					style="max-width:50%; margin: auto;"
				/>
				<div class="pokemon-details">
					<h5>{pokemon.name}</h5>
				</div>
			</label>
		{/each}
	</div>
</form>

<style>
	h1,
	h3 {
		margin-top: 50px;
		text-align: center;
	}
	div {
		text-align: center;
	}
	.pokemon-grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 30px;
		margin: 0 50px;
		margin-top: 50px;
	}

	.pokemon-card {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.selectedPokemon {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: auto 0;
		margin-bottom: 50px;
		margin-top: 50px;
	}
</style>
