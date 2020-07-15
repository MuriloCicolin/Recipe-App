import styled from 'styled-components';

export const RecipeContainer = styled.div`
  width: 100%;
  /* max-width: 1280px; */
  margin: 0 auto;
  padding: 40px;
  background: #eee;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  grid-gap: 32px;
`;
