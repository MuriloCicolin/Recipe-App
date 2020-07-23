import React, { useCallback, useRef } from 'react';
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
  number_persons: number;
  type: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: () => void;
}

const ModalAddFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddFood,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('oi');
  }, []);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Nova Receita</h1>
        <Input name="name" placeholder="Nome da Receita" />
        <Input name="type" placeholder="Tipo da Receita" />
        <Input name="image" placeholder="Cole o link da imagem aqui" />
        <TextArea name="ingredients" placeholder="Ingredientes" />
        <TextArea name="instructions" placeholder="Modo de Preparo" />
        <button type="submit">
          <p>Adicionar Receita</p>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
