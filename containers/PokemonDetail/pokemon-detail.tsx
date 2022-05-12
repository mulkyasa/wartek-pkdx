import { useState } from 'react';
import Link from 'next/link';
import Images from 'next/image';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import * as Styled from './styles';
import Badge from '@components/Badge';
import { GET_POKEMON_DETAIL } from '@utils/queries';
import { ISpecies } from '@models/ipokemondetail';
import { generateId, getPokemonTypeColor } from '@utils/formatter';

export default function PokemonDetail() {
  const router = useRouter();
  const { name } = router.query;

  const [pokemon, setPokemon] = useState<ISpecies>();

  const { loading } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: String(name).toLowerCase() },
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setPokemon(data.species[0]);
    },
  });

  let generatedId = '';
  let pokemonTypes = [];

  if (!!pokemon) {
    generatedId = generateId(pokemon?.id);
    pokemonTypes = pokemon.pokemons[0].types.map(({ type }: any) => type.name);
  }

  const typeColors = getPokemonTypeColor(pokemonTypes);
  const bgColor = !!typeColors.length ? typeColors[0].color : '#fff';
  const abilities = pokemon?.pokemons[0].abilities.map(
    (ability) => ability.ability.name
  );
  const abilitiesStr = abilities?.join(', ');
  const eggGroups = pokemon?.egg_groups
    .map(({ group }: any) => group.name)
    .join(', ');

  return (
    <>
      {!loading && <title key="page-title">Pokédex - {pokemon?.name}</title>}

      <Layout>
        <Styled.Container bgColor={bgColor}>
          <Styled.Head>
            <div className="arrow-left">
              <Link href="/">
                <a>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" />
                  </svg>
                </a>
              </Link>
            </div>
          </Styled.Head>

          {!loading && (
            <>
              <Styled.Info>
                <p className="id">{generatedId}</p>
                <h2 className="h2">{pokemon?.name}</h2>

                <div className="types">
                  {pokemonTypes?.map((type, key) => (
                    <Badge key={key} bgColor={typeColors[key].color}>
                      {type}
                    </Badge>
                  ))}
                </div>

                <div className="img-wrapper">
                  <Images
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`}
                    alt="test"
                    width="345px"
                    height="345px"
                    loading="lazy"
                  />
                </div>
              </Styled.Info>

              <Styled.DetailInfo>
                <p className="mb-12">{pokemon?.description[0].flavor_text}</p>

                <div className="list-info">
                  <p className="label">Height</p>
                  <p className="value">{pokemon?.pokemons[0].height} m</p>
                </div>
                <div className="list-info">
                  <p className="label">Weight</p>
                  <p className="value">{pokemon?.pokemons[0].weight} kg</p>
                </div>
                <div className="list-info">
                  <p className="label">Abilities</p>
                  <p className="value">{abilitiesStr}</p>
                </div>

                <h4 className="list-heading">Breeding</h4>
                <div className="list-info">
                  <p className="label">Gender</p>
                  <p className="value">
                    <span className="sub-gender-value">♂ 87.5%</span>
                    <span className="sub-gender-value">♀ 12.5%</span>
                  </p>
                </div>
                <div className="list-info">
                  <p className="label">Egg Groups</p>
                  <p className="value">{eggGroups}</p>
                </div>
                <div className="list-info">
                  <p className="label">Egg Cycles</p>
                  <p className="value">{pokemon?.hatch_counter}</p>
                </div>
              </Styled.DetailInfo>
            </>
          )}
        </Styled.Container>
      </Layout>
    </>
  );
}
