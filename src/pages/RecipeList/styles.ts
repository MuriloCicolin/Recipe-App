import styled, { keyframes } from 'styled-components';
import { FiLoader } from 'react-icons/fi';

const animateLoading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  header {
    background: #00adb5;
    height: 130px;
    display: flex;

    max-width: 100%;

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      align-content: center;
      width: 900px;

      > svg {
        margin-left: 30px;
        cursor: pointer;
      }

      h1 {
        font-size: 54px;
        color: #222831;
      }
    }
  }
`;

export const ContainerImage = styled.div`
  img {
    width: 500px;
    height: 300px;
    margin: 20px auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
  }
`;

export const SectionContainer = styled.section`
  width: 800px;
  margin: 0 auto;
  margin-left: 30px;

  > div {
    margin-bottom: 20px;
  }

  .recipe-type {
    display: flex;
    align-items: center;

    p {
      margin-left: 10px;
      font-size: 18px;
    }
  }
`;

export const IngredientsContainer = styled.div`
  h2 {
    margin-bottom: 5px;
  }
`;

export const InstructionsContainer = styled.div`
  h2 {
    margin-bottom: 5px;
  }

  p {
    line-height: 1.2;
  }
`;

export const Loader = styled(FiLoader)`
  display: block;
  margin: 200px auto;
  animation: ${animateLoading} 2s linear infinite;
`;
