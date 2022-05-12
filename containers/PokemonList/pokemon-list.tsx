import Layout from '@components/Layout';
import Card from '@components/Card';
import * as Styled from './styles';

export default function PokemonList() {
  return (
    <>
      <title key="page-title">Wartek</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <Layout>
        <Styled.Head>Pokédex</Styled.Head>

        <Styled.List>
          <Styled.Item>
            <Card />
          </Styled.Item>
        </Styled.List>
      </Layout>
    </>
  );
}
