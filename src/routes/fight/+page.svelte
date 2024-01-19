<script>
	export let data;
	$: fighter1 = data.uuid1;
	$: fighter2 = data.uuid2;
</script>

<p>UUID1: {fighter1}</p>
<p>UUID2: {fighter2}</p>
