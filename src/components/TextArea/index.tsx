import React, { useRef, useEffect, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface IProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const TextAreaInput: React.FC<IProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
};

export default TextAreaInput;
