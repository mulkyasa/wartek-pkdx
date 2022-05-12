import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';

import Layout from '@components/Layout';
import Card from '@components/Card';
import Skeleton from '@components/Skeleton';
import { IPokemon } from '@models/ipokemon';
import { GET_POKEMON_LIST } from '@utils/queries';
import useInfiniteScroll from '@utils/useInfiniteScroll';

import * as Styled from './styles';

const LoadingSkeleton = () => {
  return (
    <>
      {Array.from(Array(20)).map((_, key) => {
        return (
          <Styled.Item key={key}>
            <Skeleton />
          </Styled.Item>
        );
      })}
    </>
  );
};

export default function PokemonList() {
  const [isBottom, setIsBottom] = useInfiniteScroll('pokemon-list');

  const [pokemon, setPokemon] = useState<IPokemon>();
  const [limit, setLimit] = useState<number>(100);

  const pokemonSpeciesLength = pokemon?.species.length ?? 0;
  const pokemonSpeciesCount = pokemon?.species_aggregate.aggregate.count ?? 0;

  const { loading } = useQuery(GET_POKEMON_LIST, {
    variables: { limit },
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => setPokemon(data),
  });

  useEffect(() => {
    setIsBottom(false);
    if (
      !!pokemon &&
      !loading &&
      !!pokemonSpeciesLength &&
      isBottom &&
      pokemonSpeciesLength < pokemonSpeciesCount
    ) {
      const tempLimit = limit + 100;

      setIsBottom(false);
      setLimit(tempLimit);
    }
    // eslint-disable-next-line
  }, [pokemon, isBottom]);

  return (
    <>
      <title key="page-title">Pokédex</title>

      <Layout>
        <Styled.Head>
          Pokédex {pokemon && `(${pokemon.species_aggregate.aggregate.count})`}
        </Styled.Head>

        <Styled.List id="pokemon-list">
          {loading && !pokemon ? (
            <LoadingSkeleton />
          ) : (
            pokemon?.species.map((species) => (
              <Styled.Item key={species.id}>
                <Link href={`/${species.name}`} prefetch={false}>
                  <a>
                    <Card data={species} />
                  </a>
                </Link>
              </Styled.Item>
            ))
          )}
          {loading && !!pokemon && <LoadingSkeleton />}
        </Styled.List>
      </Layout>
    </>
  );
}
