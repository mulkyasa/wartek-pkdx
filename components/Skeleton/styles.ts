import styled from 'styled-components';

export const Skeleton = styled.div`
  background: linear-gradient(90deg, #e8e8e8 0px, #f8f8f8 40px, #e8e8e8 80px);
  background-size: 1067px;
  width: 100%;
  height: 100%;
  animation: animation 1s infinite;
  border-radius: 1.25rem;

  @keyframes animation {
    0% {
      background-position: -100px;
    }
    40%,
    100% {
      background-position: 270px;
    }
  }
`;
