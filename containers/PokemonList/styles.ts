import styled from 'styled-components';

export const Head = styled.h3`
  margin: 0 0 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const Item = styled.li`
  width: calc(50% - 6px);
  min-height: 246px;
`;
