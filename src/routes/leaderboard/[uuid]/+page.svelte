<script lang="ts">
	import Fighter from '$lib/components/Fighter.svelte';
	export let data;
	$: fighter = data.pokemon;
</script>

<div>
	{#if fighter}
		<h1>{fighter.name}'s scoreboard</h1>
		<Fighter {fighter} />

		<h1>{fighter.name}'s combat history</h1>
	{/if}
</div>
