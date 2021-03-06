import styled from 'styled-components';

export const Container = styled.div`
  header {
    border-radius: 8px;
    width: 350px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    img {
      width: 100%;
      height: 250px;
      border-radius: 4px;
    }

    section {
      position: relative;
      display: flex;
      background: #393e46;
      padding: 15px;
      margin-top: -50px;
      align-items: center;
      justify-content: space-between;

      p {
        color: #eee;
        font-weight: 500;
      }

      div {
        display: flex;
        .button-icon {
          margin-right: 10px;
          background: transparent;
          border: 0;
          color: #eee;
        }
      }
    }
  }
`;
