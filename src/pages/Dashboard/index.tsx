import React from 'react';

import Header from '../../components/Header';
import Recipe from '../../components/Recipe';

import { RecipeContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <RecipeContainer>
        <Recipe />
      </RecipeContainer>
    </>
  );
};

export default Dashboard;
