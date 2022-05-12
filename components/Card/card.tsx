import Badge from '@components/Badge';
import { ISpecies } from '@models/ipokemon';
import { pokemonTypeColor } from '@utils/constant';
import Images from 'next/image';
import * as Styled from './styles';

interface ICard {
  data: ISpecies;
}

export default function Card(props: ICard) {
  const { data } = props;

  const generateId = (id: number) => {
    const newId = String(id).padStart(3, '0');
    return `#${newId}`;
  };

  const getPokemonTypeColor = (pokemonTypes: string[]) => {
    if (pokemonTypes) {
      const typeColors = pokemonTypeColor.filter(({ type }) =>
        pokemonTypes.includes(type)
      );

      return typeColors;
    }
    return [];
  };

  const genereatedId = generateId(data.id);

  const pokemonTypes = data.pokemons[0].types.map(({ type }: any) => type.name);
  const typeColors = getPokemonTypeColor(pokemonTypes);
  const bgColor = typeColors[0].color;

  return (
    <Styled.Box bgColor={bgColor}>
      <div className="img-wrapper">
        <Images
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
          alt="test"
          width="162px"
          height="162px"
          loading="lazy"
        />
      </div>

      <Styled.DetailInfo>
        <p className="id">{genereatedId}</p>
        <h2 className="h2">{data.name}</h2>

        <div className="types">
          {pokemonTypes.map((type, key) => (
            <Badge key={key} bgColor={typeColors[key].color}>
              {type}
            </Badge>
          ))}
        </div>
      </Styled.DetailInfo>
    </Styled.Box>
  );
}
