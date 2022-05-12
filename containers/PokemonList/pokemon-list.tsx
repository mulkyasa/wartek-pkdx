import { useState } from 'react';
import Layout from '@components/Layout';
import Card from '@components/Card';
import * as Styled from './styles';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '@utils/queries';
import { IPokemon } from '@models/ipokemon';
import Skeleton from '@components/Skeleton';
import Link from 'next/link';

export default function PokemonList() {
  const [pokemon, setPokemon] = useState<IPokemon>();

  const { loading } = useQuery(GET_POKEMON_LIST, {
    variables: { limit: 100 },
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => setPokemon(data),
  });

  return (
    <>
      <title key="page-title">Wartek</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <Layout>
        <Styled.Head>
          Pokédex {pokemon && `(${pokemon.species_aggregate.aggregate.count})`}
        </Styled.Head>

        <Styled.List>
          {loading
            ? Array.from(Array(20)).map((_, key) => {
                return (
                  <Styled.Item key={key}>
                    <Skeleton />
                  </Styled.Item>
                );
              })
            : pokemon?.species.map((species) => (
                <Styled.Item key={species.id}>
                  <Link href={`/${species.name}`} prefetch={false}>
                    <a>
                      <Card data={species} />
                    </a>
                  </Link>
                </Styled.Item>
              ))}
        </Styled.List>
      </Layout>
    </>
  );
}
