import { useState } from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Grid, Card, Text, Button, Image, Row } from "@nextui-org/react";

import confetti from 'canvas-confetti';

import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { getPokemonInfo, localFavorites } from "../../utils";

interface PokemonByNameProps {
  pokemon: Pokemon;
}
const PokemonByName: NextPage<PokemonByNameProps> = ({
  pokemon,
}: PokemonByNameProps) => {
  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites((oldValue) => !oldValue)

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })

  }
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
            <Button color="gradient" ghost={!isInFavorites} onPress={onToggleFavorite}>
              {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
            </Button>
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
  </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151: PokemonListResponse = await pokeApi('/pokemon/?limit=151');
  return {
    paths: pokemon151.results.map((pokemon) => ({
      params: { name: pokemon.name },
    })),
    fallback: 'blocking', // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const pokemon =  await getPokemonInfo(name.toLocaleLowerCase());
  if(!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {
      pokemon
    },
  };
};

export default PokemonByName;
