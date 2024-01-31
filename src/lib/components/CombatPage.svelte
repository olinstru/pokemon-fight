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
			You can change your Pokemon's name. Life and force points are random.
		</p>
	</div>
</div>
