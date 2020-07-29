import styled, { keyframes } from 'styled-components';
import { FiLoader } from 'react-icons/fi';

const animateLoading = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg)
  }
`;

export const RecipesContainer = styled.div`
  width: 100%;

  margin: 0 auto;
  padding: 40px;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;

export const Loader = styled(FiLoader)`
  display: block;
  margin: 200px auto;
  animation: ${animateLoading} 2s linear infinite;
`;
