import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  background-color: #b5eaaf;
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
  & .badge {
    display: flex;
    align-items: center;
    background-color: #4fb443;
    border-radius: 0.5rem;
    padding: 1px 6px;
    font-size: 12px;
    color: #fff;
  }
`;
