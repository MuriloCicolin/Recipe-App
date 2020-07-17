import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Recipe from '../../components/Recipe';

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

  useEffect(() => {
    async function loadRecipes(): Promise<void> {
      const response = await api.get('/recipes');
      setRecipes(response.data);
    }
    loadRecipes();
  }, []);

  return (
    <>
      <Header />
      <RecipesContainer>
        {recipes &&
          recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
      </RecipesContainer>
    </>
  );
};

export default Dashboard;
