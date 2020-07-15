import styled from 'styled-components';

export const Container = styled.header`
  max-width: 100%;
  height: 150px;
  background: #00adb5;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    margin: 0 auto;

    h1 {
      color: #222831;
      font-size: 54px;
    }
    span {
      color: #222831;
      display: block;
      margin-top: 5px;
      text-align: center;
    }
  }
`;

export const AddRecipeButton = styled.button`
  border: 0;
  margin-right: 40px;
  padding: 11px 12px;
  background: #393e46;
  color: #eee;
  font-weight: bold;
  border-radius: 5px;
  transition: color 0.2s;

  &:hover {
    background: #393e46;
    opacity: 0.9;
  }
`;
