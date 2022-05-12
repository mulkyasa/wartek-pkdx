import * as Styled from './styles';

interface IBadge {
  children: React.ReactNode;
  bgColor: string;
}

export default function Badge(props: IBadge) {
  const { children, bgColor } = props;
  return <Styled.Badge bgColor={bgColor}>{children}</Styled.Badge>;
}
