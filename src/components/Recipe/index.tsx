import React from 'react';

import { Container, TrashIcon, EditIcon } from './styles';

const Recipe: React.FC = () => {
  return (
    <Container>
      <div>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
          alt="Teste"
        />
        <div>
          <p>Comida Australiana</p>
          <TrashIcon />
          <EditIcon />
        </div>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
          alt="Teste"
        />
        <div>
          <p>Comida Australiana</p>
          <TrashIcon />
          <EditIcon />
        </div>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
          alt="Teste"
        />
        <div>
          <p>Comida Australiana</p>
          <TrashIcon />
          <EditIcon />
        </div>
      </div>
    </Container>
  );
};

export default Recipe;
