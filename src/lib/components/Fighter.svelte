<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { FightersInSquad } from '$lib/types';
	export let fighter: FightersInSquad;
</script>

<div class="card text-dark" style="width: 22rem;">
	<img
		class="card-img-top small"
		style="max-width:50%; margin: auto;"
		src={fighter.img}
		alt={fighter.name}
	/>
	<div class="card-body">
		<h5 class="card-title" style="text-align: center;">{fighter.name}</h5>
		<p class="card-text" style="text-align: center;">
			Health: {fighter.pv}
		</p>
		<p class="card-text" style="text-align: center;">
			Force: {fighter.force}
		</p>
		<p class="card-text" style="text-align: center;">
			Points: {fighter.points}
		</p>
	</div>
</div>

<style>
	div {
		text-align: center;
	}
</style>
