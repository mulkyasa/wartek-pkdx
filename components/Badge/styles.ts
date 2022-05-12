import styled from 'styled-components';

interface IBadgeStyle {
  bgColor: string;
}

export const Badge = styled.div<IBadgeStyle>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 0.5rem;
  padding: 1px 6px;
  font-size: 12px;
  color: #fff;
`;
