import pokemons from '$lib/pokemons.json';

export function getPokemonData(id: number) {
	const img = pokemons[id -1].sprites.front_default;
	return img;
}
