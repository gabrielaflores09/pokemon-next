import { useTheme, Text, Spacer, Row, Image } from "@nextui-org/react";
import NextLink from "next/link";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        margin: 0,
        backgroundColor: theme?.colors.gray300.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Icono Ditto"
        width={70}
      />
      <NextLink href="/" passHref>
        <Row
          css={{
            alignItems: "center",
          }}
        >
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </Row>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Row>
          <Text color="white">Favoritos</Text>
        </Row>
      </NextLink>
    </div>
  );
};

export default Navbar;
