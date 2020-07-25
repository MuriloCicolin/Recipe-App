import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';

import Modal from '../Modal';
import Input from '../Input';
import TextArea from '../TextArea';

import { Form } from './styles';

interface IRecipe {
  id: number;
  image: string;
  ingredients: string;
  instructions: string;
  name: string;
  type: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateRecipe: (recipe: Omit<IRecipe, 'id'>) => void;
  editingRecipe: IEditRecipe;
}

interface IEditRecipe {
  name: string;
  type: string;
  image: string;
  ingredients: string;
  instructions: string;
}

const ModalEditRecipe: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleUpdateRecipe,
  editingRecipe,
}) => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(
    async (data: IEditRecipe) => {
      handleUpdateRecipe(data);
      setIsOpen();
    },
    [handleUpdateRecipe, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingRecipe}>
        <h1>Editar Receita</h1>
        <Input name="name" placeholder="Digite o nome da Receita" />
        <Input name="type" placeholder="Digite o tipo da Receita" />
        <Input name="image" placeholder="Cole o link da imagem aqui" />
        <TextArea name="ingredients" placeholder="Lista de ingredientes" />
        <TextArea name="instructions" placeholder="Modo de Preparo" />

        <button type="submit">
          <p>Editar Prato</p>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditRecipe;
