import * as Styled from './styles';

interface ILayout {
  children: React.ReactNode;
}

export default function Layout(props: ILayout) {
  const { children } = props;
  return <Styled.Container>{children}</Styled.Container>;
}
