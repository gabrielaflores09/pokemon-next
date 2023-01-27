import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Grid, Card, Text, Image, Row } from "@nextui-org/react";

import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { getPokemonInfo } from "../../utils";

interface PokemonByNameProps {
  pokemon: Pokemon;
}
const PokemonByName: NextPage<PokemonByNameProps> = ({
  pokemon,
}: PokemonByNameProps) => {
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Row>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  height={100}
                />
              </Row>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
      <Grid.Container>
        <pre>
          {JSON.stringify(pokemon, null, 2)}
        </pre>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151: PokemonListResponse = await pokeApi('/pokemon/?limit=151');
  return {
    paths: pokemon151.results.map((pokemon) => ({
      params: { name: pokemon.name },
    })),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  return {
    props: {
      pokemon: await getPokemonInfo(name)
    },
  };
};

export default PokemonByName;
