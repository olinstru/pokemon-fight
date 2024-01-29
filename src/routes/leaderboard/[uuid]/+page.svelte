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
			<ul>
				{#each filteredLeaderboard as combat}
					<li>
						Winner: {combat.winner}<br />
						Pokemon 1: {combat.uuid1}<br />
						Pokemon 2: {combat.uuid2}<br />
					</li>
				{/each}
			</ul>
		{:else}
			<p>No combats found for your Pokemon.</p>
		{/if}
	{/if}
</div>
