import React, { useState } from 'react';
import styled from 'styled-components';



interface ImageCarouselProps {
  images: string[];
}

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
 

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Button = styled.button`
  background-color: #f1f1f1;
  border: none;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
`;

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselContainer>
      <Button onClick={goToPreviousImage}>&lt;&lt;&lt;</Button>
      <Image src={images[currentImageIndex]} alt="Imagem" />
      <Button onClick={goToNextImage}>&gt;&gt;&gt;</Button>
    </CarouselContainer>
  );
};

export default ImageCarousel;
