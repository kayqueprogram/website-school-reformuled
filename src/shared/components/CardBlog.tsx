import React from 'react';
import styled from 'styled-components';

type CardProps = {
  title: string;
  image: string;
  description: string;
};

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 24px;
  max-width: 100%;
  overflow: hidden;
  width: 400px;
  transition: .3s;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;


const CardImage = styled.img`
  height: 200px;
  object-fit: cover;
  width: 100%;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 16px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  margin: 0 16px 16px;
`;

const CardButton = styled.button`
  background-color: #F6BA07;
  transition: .2s;
  text-align: center;
  border-radius: 4px;
  padding: 10px 10px;
  width: .5rem;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    color: white;
  }


  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

const CardBlog: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton><a href="#">Ler mais</a></CardButton>
    </CardContainer>
  );
};

export default CardBlog;
