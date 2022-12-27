// External deps
import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";

// Internal deps
import { Layout } from "../components/layouts";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { pokeApi } from "../api";
import { PokemonCard } from "../components/pokemon";

interface HomePageProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }: HomePageProps) => {
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response: PokemonListResponse = await pokeApi("/pokemon?limit=151");
  const pokemonsAfter = response.results.map((pokemon, i) => {
    const idPokemon = i + 1;
    return {
      ...pokemon,
      id: idPokemon,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`,
    };
  });
  return {
    props: {
      pokemons: pokemonsAfter,
    },
  };
};

export default HomePage;
