<script lang="ts">
	import Fighter from '$lib/components/Fighter.svelte';

	export let data;
	const fighter1 = data.pokemonFighter1;
	const fighter2 = data.pokemonFighter2;
	const pokemonFighters = [fighter1, fighter2]
</script>

<div class="squad">
	{#each pokemonFighters as fighter}
		<Fighter {fighter} />
	{/each}
</div>

<style>
.squad {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 40px;
	}
</style>
