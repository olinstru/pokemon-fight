<script lang="ts">
	import Fighter from '$lib/components/Fighter.svelte';
	export let data;
	$: fighter = data.squad;
</script>

<div>
	<h1>Fighters</h1>
	<div class="squad">
		{#each fighter as fighter (fighter.uuid)}
			<a href="leaderboard/{fighter.uuid}">
				<Fighter {fighter} />
			</a>
		{/each}
	</div>
</div>

<style>
	.squad {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 40px;
	}

	a {
		text-decoration: none;
	}
</style>
