import { pokemonTypeColor } from "./constant";

export const generateId = (id: number) => {
  const newId = String(id).padStart(3, '0');
  return `#${newId}`;
};

export const getPokemonTypeColor = (pokemonTypes: string[]) => {
  if (pokemonTypes) {
    const typeColors = pokemonTypeColor.filter(({ type }) =>
      pokemonTypes.includes(type)
    );

    return typeColors;
  }
  return [];
};