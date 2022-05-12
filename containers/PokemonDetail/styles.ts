import styled from 'styled-components';

interface IContainerStyle {
  bgColor: string;
}

export const Container = styled.div<IContainerStyle>`
  background-color: ${props => props.bgColor}80;
  height: 100%;
`;

export const Head = styled.div`
  padding: 16px;
  margin-bottom: 8px;

  & .arrow-left {
    max-height: 24px;
    max-width: 24px;
  }
`;

export const Info = styled.div`
  padding: 16px;

  & .id {
    margin-bottom: 8px;
  }
  & .h2 {
    font-size: 24px;
    text-transform: capitalize;
    margin-bottom: 8px;
  }
  & .types {
    display: flex;
    flex-direction: row;
    gap: 4px;
    margin-bottom: 12px;
  }
  & .img-wrapper {
    text-align: center;
  }
`;

export const DetailInfo = styled.div`
  background-color: #fff;
  height: calc(100% - 412px);
  width: 100%;
  padding: 32px;
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  box-shadow: 2px 4px 15px 0 rgb(0 0 0 / 25%);
  clip-path: inset(-5px 0px 0 0);
  font-size: 14px;

  & .mb-12 {
    margin-bottom: 12px;
  }

  & .list-heading {
    padding: 8px 0;
  }
  & .list-info {
    display: flex;
    flex-direction: row;
    padding: 8px 0;

    & .label {
      color: #718096;
      min-width: 120px;
      max-width: 120px;
    }

    & .value {
      & .sub-gender-value {
        margin-right: 12px;
      }
    }
  }
`;
