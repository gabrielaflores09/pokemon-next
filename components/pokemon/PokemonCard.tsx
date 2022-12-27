import { Grid, Card, Text, Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import { SmallPokemon } from "../../interfaces";

interface PokemonCardProps {
  pokemon: SmallPokemon;
}
const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, img, name } = pokemon;

  const router = useRouter();

  const onClickPokemon = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid key={id} xs={6} sm={30} md={2} xl={1}>
      <Card isHoverable isPressable onClick={onClickPokemon}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} height={140} alt={name} />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text b transform="capitalize">
              {name}
            </Text>
            <Text b>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
