import React from 'react';

import { Container, AddRecipeButton } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <nav>
        <h1>Recipe App</h1>
        <span>Seu cardápio online</span>
      </nav>
      <AddRecipeButton>Adicionar receita</AddRecipeButton>
    </Container>
  );
};

export default Header;
