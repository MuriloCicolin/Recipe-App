import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Recipe from '../../components/Recipe';

import ModalAddFood from '../../components/ModalAddFood';

import api from '../../services/api';

import { RecipesContainer } from './styles';

interface IRecipe {
  id: number;
  image: string;
  ingredients: string;
  instructions: string;
  name: string;
  number_persons: number;
  type: string;
}

const Dashboard: React.FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function loadRecipes(): Promise<void> {
      const response = await api.get('/recipes');
      setRecipes(response.data);
    }
    loadRecipes();
  }, []);

  function handleAddFood(): void {
    console.log('testando');
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <RecipesContainer>
        {recipes &&
          recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
      </RecipesContainer>
    </>
  );
};

export default Dashboard;
