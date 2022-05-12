import * as Styled from './styles';

interface IBadge {
  children: React.ReactNode;
}

export default function Badge(props: IBadge) {
  const { children } = props;
  return <Styled.Badge>{children}</Styled.Badge>;
}
