import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

import './styles.css';

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [ḿodalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={ḿodalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#e5e5e5',
          color: '#e5e5e5',
          borderRadius: '8px',
          width: '890px',
          height: '100vh',
          border: 'none',
        },
        overlay: {},
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
