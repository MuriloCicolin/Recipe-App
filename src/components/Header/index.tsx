import React from 'react';

import { Container, AddRecipeButton } from './styles';

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => {
  return (
    <Container>
      <nav>
        <h1>Recipe App</h1>
        <span>Seu cardápio online</span>
      </nav>
      <AddRecipeButton
        onClick={() => {
          openModal();
        }}
      >
        Adicionar receita
      </AddRecipeButton>
    </Container>
  );
};

export default Header;
