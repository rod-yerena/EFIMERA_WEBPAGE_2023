import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 80%; /* Ancho de la imagen */
    overflow: hidden; /* Oculta las partes de los botones de flecha que se salen del contenedor */
    margin: 0 auto; /* Centra el carrusel horizontalmente */
`;

const Image = styled.img`
  width: 100%; /* La imagen ocupará el 100% del ancho del contenedor */
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  font-size: 50px; /* Tamaño de fuente aumentado para las flechas */
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 10px; /* Alinea el botón de flecha izquierda a 10px del borde izquierdo */
`;

const RightArrowButton = styled(ArrowButton)`
  right: 10px; /* Alinea el botón de flecha derecha a 10px del borde derecho */
`;

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Wrapper>
      <LeftArrowButton onClick={goToPrevSlide}>&#8592;</LeftArrowButton>
      <Image src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <RightArrowButton onClick={goToNextSlide}>&#8594;</RightArrowButton>
    </Wrapper>
  );
};

export default Carousel;
