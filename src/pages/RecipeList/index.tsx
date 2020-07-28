import React, { useEffect, useState } from 'react';

import { useRouteMatch, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import {
  Container,
  ContainerImage,
  IngredientsContainer,
  SectionContainer,
  InstructionsContainer,
} from './styles';

interface IRecipeParams {
  recipe: string;
}

interface IRecipe {
  id: number;
  image: string;
  ingredients: string;
  instructions: string;
  name: string;
  type: string;
}

const RecipeList: React.FC = () => {
  const [recipe, setRecipe] = useState<IRecipe>({} as IRecipe);

  const { params } = useRouteMatch<IRecipeParams>();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`/recipes/${params.recipe}`)
      .then(response => setRecipe(response.data));
  }, [params.recipe]);

  return (
    <Container>
      <header>
        <nav>
          <FiArrowLeft size={45} onClick={history.goBack} />
          <h1>{recipe.name}</h1>
        </nav>
      </header>
      <ContainerImage>
        <img src={recipe.image} alt="" />
      </ContainerImage>
      <SectionContainer>
        <div className="recipe-type">
          <h2>Tipo de Receita: </h2>
          <p>{recipe.type}</p>
        </div>
        <IngredientsContainer>
          <h2>Ingredientes: </h2>
          <p>{recipe.ingredients}</p>
        </IngredientsContainer>
        <InstructionsContainer>
          <h2>Modo de Preparo: </h2>
          <p>{recipe.instructions}</p>
        </InstructionsContainer>
      </SectionContainer>
    </Container>
  );
};

export default RecipeList;
