<script lang="ts">
	import { invalidate } from '$app/navigation';
	import Fighter from '$lib/components/Fighter.svelte';
	export let data;
	$: fighter = data.squad.sort((a, b) => b.points - a.points);
	$: podium = fighter.slice(0, 3);
	$: fighters = fighter.slice(3);
</script>

<div>
	<h1>Leaderboard</h1>
	<div class="squad">
		<div class="podium">
			{#each podium as fighter, index (fighter.uuid)}
				<a href="leaderboard/{fighter.uuid}">
					<div class="fighter-container">
						<p class="placement">
							{#if index === 0}
								🥇 1st Place
							{:else if index === 1}
								🥈 2nd Place
							{:else if index === 2}
								🥉 3rd Place
							{:else}
								#{index + 1} Position
							{/if}
						</p>
						<Fighter {fighter} />
					</div>
				</a>
			{/each}
		</div>

		<div class="leaderboard">
			{#each fighters as fighter, index (fighter.uuid)}
				<a href="leaderboard/{fighter.uuid}">
					<div class="fighter-container">
						<p class="placement">
							{index + 4}th Place
						</p>
						<Fighter {fighter} />
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.squad {
		display: flex;
		flex-direction: column;
	}

	.podium {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 50px;
		margin-bottom: 50px;
	}

	h1 {
		text-align: center;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.leaderboard {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 50px;
	}
	a {
		text-decoration: none;
	}

	.placement {
		text-align: center;
		color: purple;
		font-weight: bold;
	}
</style>
