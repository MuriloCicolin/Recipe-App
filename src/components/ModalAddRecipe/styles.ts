import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  .ingredients {
    height: 200px;
  }

  h1 {
    font-weight: bold;
    color: #222831;
    background: #00adb5;
    margin-bottom: 20px;
    text-align: center;
    padding: 12px 0;
    border-radius: 8px;
  }

  button {
    border: 0;
    font-weight: 600;
    background: #222831;
    width: 200px;
    margin: 20px auto;
    padding: 14px;
    border-radius: 8px;

    &:hover {
      background: #393e46;
      opacity: 0.9;
    }

    p {
      color: #eee;
    }
  }
`;
