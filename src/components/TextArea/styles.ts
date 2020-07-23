import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* align-items: center; */

  background: #393e46;
  border-radius: 8px;
  padding: 18px 24px;
  width: 100%;
  height: 150px;
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  textarea {
    flex: 1;
    background: transparent;
    border: 0;
    color: #e5e5e5;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

    &::placeholder {
      color: #e5e5e5;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
