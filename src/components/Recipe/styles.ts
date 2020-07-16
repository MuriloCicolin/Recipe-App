import styled from 'styled-components';
import { FiEdit, FiTrash } from 'react-icons/fi';

export const Container = styled.div`
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: grid;

  div {
    img {
      border-radius: 8px;
    }
  }

  section {
    background: #393e46;
    width: 350px;
    margin-top: -40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border-radius: 3px;

    p {
      color: #eee;
      font-weight: 500;
      margin-left: 20px;
    }
  }
`;

export const SectionIcons = styled.div`
  margin-right: 20px;
`;

export const EditIcon = styled(FiEdit)`
  cursor: pointer;
  margin-left: 5px;
`;

export const TrashIcon = styled(FiTrash)`
  cursor: pointer;
`;
