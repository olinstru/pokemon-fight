<script lang="ts">
	import Fighter from '$lib/components/Fighter.svelte';
	export let data;
	$: fighter = data.squad;
</script>

<div>
	<h1>Fighters</h1>
	<div class="squad">
		{#each fighter as fighter (fighter.uuid)}
			<Fighter {fighter} />
		{/each}
	</div>
</div>

<style>
	.squad {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 40px;
	}
</style>
