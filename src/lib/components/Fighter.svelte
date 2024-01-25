<script lang="ts">
	import type { FightersInSquad } from '$lib/types';
	export let fighter: FightersInSquad;
</script>

<div class="fighter-card">
	<p>Name: {fighter.name}</p>
	<img src={fighter.img} alt={fighter.name} />
	<p>PV: {fighter.pv}</p>
	<p>Force: {fighter.force}</p>
	<p>Points: {fighter.points}</p>
</div>

<style>
	.fighter-card {
		width: 500px;
		text-align: center;
		color: black;
		font-weight: bold;
		border-radius: 10px;
		border: 3px solid lightgray;
	}
</style>
