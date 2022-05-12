export interface IType {
  type: {
    name: string;
  };
}

export interface IPokemons {
  id: number;
  types: IType[];
}

export interface ISpecies {
  id: number;
  name: string;
  pokemons: IPokemons[];
}

export interface ISpeciesAggregate {
  aggregate: {
    count: number;
  };
}

export interface IPokemon {
  species: ISpecies[];
  species_aggregate: ISpeciesAggregate;
}
