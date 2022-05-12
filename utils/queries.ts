import { gql } from '@apollo/client';

export const GET_POKEMON_LIST = gql`
  query getPokemons($limit: Int) {
    species: pokemon_v2_pokemonspecies(
      limit: $limit
      offset: 0
      order_by: { id: asc }
    ) {
      id
      name
      pokemons: pokemon_v2_pokemons {
        id
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
          }
        }
      }
    }

    species_aggregate: pokemon_v2_pokemonspecies_aggregate {
      aggregate {
        count
      }
    }
  }
`;