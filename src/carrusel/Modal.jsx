
import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel'; // Importa tu componente de carrusel

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: transparent;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Modal = ({ isOpen, onClose, images }) => {
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalContainer onClick={handleCloseModal}>
      <ModalContent>
        <Carousel images={images} />
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
