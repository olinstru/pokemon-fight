<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { FightersInSquad } from '$lib/types';
	export let fighter: FightersInSquad;

	async function callDeleteEndpoint(uuid: string) {
		const response = await fetch(`/${uuid}`, { method: 'DELETE' });
		const newSquadSize = await response.json();
		await invalidate('squad:all');
		console.log(newSquadSize, response);
	}
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
			Score: {fighter.points}
		</p>
		<button
			class="btn btn-outline-danger btn-sm mx-auto"
			style="font-size: 1.2rem;"
			on:click={() => {
				callDeleteEndpoint(fighter.uuid);
			}}
			><i class="fa fa-trash-o"></i>
		</button>
	</div>
</div>
