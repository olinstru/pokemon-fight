<script lang="ts">
	import { invalidate } from '$app/navigation';
	import Fighter from '$lib/components/Fighter.svelte';
	export let data;
	$: fighter = data.squad.sort((a, b) => b.points - a.points);
</script>

<div>
	<h1>Fighters</h1>
	<div class="squad">
		{#each fighter as fighter, index (fighter.uuid)}
			<a href="leaderboard/{fighter.uuid}">
				<div class="fighter-container">
					<p class="placement">{index + 1}st Place</p>
					<Fighter {fighter} />
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.squad {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 50px;
		margin: 0 20px;
	}
	a {
		text-decoration: none;
	}
</style>
