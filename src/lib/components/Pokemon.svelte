<script lang="ts">
	export let pokemon: {
		name: string;
		id: number;
		sprites: { front_default: string };
	};
</script>

<div class="pokemon-card">
		<p>#{pokemon.id}</p>
		<img src={pokemon.sprites.front_default} alt={pokemon.name} />
		<p>{pokemon.name}</p>
</div>

<style>
	.pokemon-card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: black;
		font-weight: bold;
		border-radius: 5px;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
	}
</style>
