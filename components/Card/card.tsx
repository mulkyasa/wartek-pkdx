import Badge from '@components/Badge';
import Images from 'next/image';
import * as Styled from './styles';

export default function Card() {
  return (
    <Styled.Box>
      <div className="img-wrapper">
        <Images
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="test"
          width="162px"
          height="162px"
          loading="lazy"
        />
      </div>

      <Styled.DetailInfo>
        <p className="id">#001</p>
        <h2 className="h2">Bulbasaur</h2>

        <div className="types">
          <Badge>grass</Badge>
          <Badge>poison</Badge>
        </div>
      </Styled.DetailInfo>
    </Styled.Box>
  );
}
