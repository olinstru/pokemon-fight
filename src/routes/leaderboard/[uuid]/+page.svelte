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
		<h1>{fighter.name}'s Scoreboard</h1>
		<div class="fighterCard">
			<Fighter {fighter} />
		</div>

		<h2>Combat History</h2>

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
	h1,
	h2 {
		text-align: center;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.fighterCard {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 50px auto;
		text-align: center; /* Added for better centering */
	}

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
