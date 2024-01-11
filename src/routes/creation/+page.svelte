<script lang="ts">
	export let data;
	import Pokemon from '$lib/components/Pokemon.svelte';
</script>

<h1>Création de personnage</h1>

<form>
	<div class="cards">
		{#each data.pokemons as pokemon}
			<Pokemon {pokemon} />
		{/each}
	</div>
</form>

<style>
	.cards {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 16px;
	}
</style>
