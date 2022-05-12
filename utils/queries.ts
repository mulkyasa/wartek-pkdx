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

export const GET_POKEMON_DETAIL = gql`
  query getPokemon($name: String) {
    species: pokemon_v2_pokemonspecies(
      where: { name: { _eq: $name } }
      limit: 1
    ) {
      id
      gender_rate
      hatch_counter
      name
      description: pokemon_v2_pokemonspeciesflavortexts(
        limit: 1
        where: { pokemon_v2_language: { name: { _eq: "en" } } }
      ) {
        flavor_text
      }
      egg_groups: pokemon_v2_pokemonegggroups {
        group: pokemon_v2_egggroup {
          name
        }
      }
      pokemons: pokemon_v2_pokemons {
        id
        name
        height
        weight
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
          }
        }
        abilities: pokemon_v2_pokemonabilities {
          ability: pokemon_v2_ability {
            name
          }
        }
        stats: pokemon_v2_pokemonstats {
          base_stat
          stat: pokemon_v2_stat {
            name
          }
        }
      }
    }
  }
`;
