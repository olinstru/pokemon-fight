<script lang="ts">
	import Fighter from '$lib/components/Fighter.svelte';
	export let data;
	$: fighterUUID = data.uuid;
	$: fighter = data.pokemon;
	$: leaderboard = data.leaderboard;
	$: filteredLeaderboard = leaderboard.filter((combat) => {
		return combat.uuid1 === fighterUUID || combat.uuid2 === fighterUUID;
	});
</script>

<div>
	{#if fighter}
		<h1>{fighter.name}'s scoreboard</h1>
		<Fighter {fighter} />

		<h1>{fighter.name}'s combat history</h1>

		{#if filteredLeaderboard.length > 0}
			<ul class="combat-history">
				{#each filteredLeaderboard as combat}
					<li class="combat-item">
						<div class="winner-info">Winner: {combat.winner}</div>
						<div class="pokemon-info">Pokemon 1: {combat.uuid1}</div>
						<div class="pokemon-info">Pokemon 2: {combat.uuid2}</div>
					</li>
				{/each}
			</ul>
		{:else}
			<p>No combats found for your Pokemon.</p>
		{/if}
	{/if}
</div>

<style>
	.combat-history {
		list-style-type: none;
		padding: 0;
	}

	.combat-item {
		border: 1px solid #ddd;
		border-radius: 5px;
		padding: 10px;
		margin-bottom: 10px;
	}

	.winner-info {
		font-weight: bold;
	}

	.pokemon-info {
		margin-top: 5px;
		color: #555;
	}
</style>
