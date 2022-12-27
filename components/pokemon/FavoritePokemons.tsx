import { Grid } from "@nextui-org/react";
import { NextPage } from "next";

import FavoriteCardPokemon from "./FavoriteCardPokemon";

interface FavoritePokemonsProps {
  pokemons: number[];
}

const FavoritePokemons: NextPage<FavoritePokemonsProps> = ({
  pokemons,
}: FavoritePokemonsProps) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemons;
