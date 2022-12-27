import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";



interface FavoriteCardPokemonProp {
  id: number;
}

const FavoriteCardPokemon: NextPage<FavoriteCardPokemonProp> = ({
  id,
}: FavoriteCardPokemonProp) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable css={{ padding: 10 }} isPressable onClick={onFavoriteClicked}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={250}
        />
      </Card>
    </Grid>
  );
}

export default FavoriteCardPokemon;