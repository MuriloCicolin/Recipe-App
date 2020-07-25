import React from 'react';
import { FiEdit, FiTrash, FiEye } from 'react-icons/fi';

import { Container } from './styles';

interface IRecipe {
  id: number;
  image: string;
  ingredients: string;
  instructions: string;
  name: string;
  type: string;
}

interface IProps {
  recipe: IRecipe;
  handleEditRecipe: (food: IRecipe) => void;
  handleDelete: (id: number) => {};
}

const Recipe: React.FC<IProps> = ({
  recipe,
  handleEditRecipe,
  handleDelete,
}) => {
  function setEditingRecipe(): void {
    handleEditRecipe(recipe);
  }
  return (
    <Container>
      <header className="card">
        <img src={recipe.image} alt="" />
        <section>
          <p>{recipe.name}</p>

          <div>
            <button type="button" className="button-icon">
              <FiEye />
            </button>
            <button
              onClick={() => setEditingRecipe()}
              type="button"
              className="button-icon"
            >
              <FiEdit />
            </button>

            <button
              type="button"
              className="button-icon"
              onClick={() => handleDelete(recipe.id)}
            >
              <FiTrash />
            </button>
          </div>
        </section>
      </header>
    </Container>
  );
};

export default Recipe;
