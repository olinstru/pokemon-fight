<script>
	export let data;
	$: squadSize = data.squadSize;
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light ">
	<a class="navbar-brand" href="/">
		<img
			src="/pokeball.png"
			alt="pokemon logo"
			width="30"
			height="30"
			class="d-inline-block align-top"
		/>
		Pokemon Fight!
	</a>

	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link" href="/">Start Combat</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/creation">Create A Fighter</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/leaderboard">Leaderboard ({squadSize})</a>
			</li>
		</ul>
	</div>
</nav>

<slot />
