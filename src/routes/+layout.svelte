<script>
	export let data;
	$: squadSize = data.squadSize;
</script>

<menu>
	<nav>
		<a href="/">Home</a>
		<a href="/creation">Create a fighter</a>
		<a href="/list">Fighters ({squadSize})</a>
		<!-- <a href="/combat">Combat</a> -->
	</nav>
</menu>

<slot />
