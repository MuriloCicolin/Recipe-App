import React from 'react';

import Header from '../../components/Header';
import Recipe from '../../components/Recipe';

import { RecipesContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <RecipesContainer>
        <Recipe />
      </RecipesContainer>
    </>
  );
};

export default Dashboard;
