import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  const pokemonData: Pokemon = await pokeApi(`/pokemon/${nameOrId}`);
  return {
    id: pokemonData.id,
    name: pokemonData.name,
    sprites: pokemonData.sprites
  }

}