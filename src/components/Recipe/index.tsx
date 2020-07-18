import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

interface IRecipe {
  id: number;
  image: string;
  ingredients: string;
  instructions: string;
  name: string;
  number_persons: number;
  type: string;
}

interface IProps {
  recipe: IRecipe;
}

const Recipe: React.FC<IProps> = ({ recipe }) => {
  return (
    <Container>
      <header className="card">
        <img src={recipe.image} alt="" />
        <section>
          <p>{recipe.name}</p>

          <div>
            <button type="button" className="button-icon">
              <FiEdit />
            </button>

            <button type="button" className="button-icon">
              <FiTrash />
            </button>
          </div>
        </section>
      </header>
    </Container>
  );
};

export default Recipe;
