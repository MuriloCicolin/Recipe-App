import React, { useEffect, useState } from 'react';

import ModalEditRecipe from '../../components/ModalEditRecipe';

import Header from '../../components/Header';
import Recipe from '../../components/Recipe';

import ModalAddRecipe from '../../components/ModalAddRecipe';

import api from '../../services/api';

import { RecipesContainer } from './styles';

interface IRecipe {
  id: number;
  image: string;
  ingredients: string;
  instructions: string;
  name: string;
  type: string;
}

const Dashboard: React.FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [editingRecipe, setEditingRecipe] = useState<IRecipe>({} as IRecipe);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadRecipes(): Promise<void> {
      const response = await api.get('/recipes');
      setRecipes(response.data);
    }
    loadRecipes();
  }, []);

  async function handleAddRecipe(recipe: Omit<IRecipe, 'id'>): Promise<void> {
    try {
      const response = await api.post('/recipes', {
        ...recipe,
      });
      setRecipes(oldRecipe => [...oldRecipe, response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  async function handleUpdateRecipe(
    recipe: Omit<IRecipe, 'id'>,
  ): Promise<void> {
    try {
      const response = await api.put(`/recipes/${editingRecipe.id}`, {
        ...recipe,
      });
      setRecipes(oldRecipes =>
        [...oldRecipes].map(recipeId =>
          recipeId.id === editingRecipe.id ? response.data : recipeId,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleEditModal(): Promise<void> {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditRecipe(recipe: IRecipe): void {
    setEditingRecipe(recipe);
    setEditModalOpen(true);
  }

  async function handleDeleteRecipe(id: number): Promise<void> {
    try {
      await api.delete(`/recipes/${id}`);
      setRecipes(oldRecipes => [
        ...oldRecipes.filter(recipe => recipe.id !== id),
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddRecipe
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddRecipe={handleAddRecipe}
      />

      <ModalEditRecipe
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingRecipe={editingRecipe}
        handleUpdateRecipe={handleUpdateRecipe}
      />
      <RecipesContainer>
        {recipes &&
          recipes.map(recipe => (
            <Recipe
              key={recipe.id}
              recipe={recipe}
              handleEditRecipe={handleEditRecipe}
              handleDelete={handleDeleteRecipe}
            />
          ))}
      </RecipesContainer>
    </>
  );
};

export default Dashboard;
