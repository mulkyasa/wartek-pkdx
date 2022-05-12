import styled from 'styled-components';

interface ICardStyle {
  bgColor: string;
}

export const Box = styled.div<ICardStyle>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bgColor}80;
  border-radius: 1.25rem;
  padding: 12px;

  & .img-wrapper {
    text-align: center;
    margin-bottom: 12px;
  }
`;

export const DetailInfo = styled.div`
  & .id {
    margin-bottom: 8px;
  }
  & .h2 {
    font-size: 16px;
    margin-bottom: 8px;
  }
  & .types {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }
`;
