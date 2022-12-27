// External deps
import { Card, Grid } from "@nextui-org/react";
import Image from "next/image";
import { useState, useEffect } from "react";

// Internal deps
import NoFavorites from "../../components/iu/NoFavorites";
import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { localFavorites } from '../../utils/index'

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title="Favoritos">
      {favoritePokemons.length ?
        <>
          <h2>Favoritos</h2>
          <FavoritePokemons pokemons={favoritePokemons}/>
        </>
        :
        <NoFavorites />
      }
    </Layout>
  );
};

export default FavoritesPage;
