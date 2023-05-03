import React from 'react';
import styled from 'styled-components';

type TCardProps = {
  title: string;
  image: string;
  description: string;
};


const BlogCard = ({title,image,description}:TCardProps) => {
  return (
    <CardContainer>
    <CardImage src={image} alt={title} />
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
    <CardButton><a href="#">Ler mais</a></CardButton>
  </CardContainer>
  )
}

const CardContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: .3s;
  &:hover {
    transform: scale(1.06);
  }

`;


const CardImage = styled.img` 
  width: 100%;
  height: 200px;
  object-fit: cover;
 
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
  width: 100%;
  background-color: ${({theme})=>theme.colors.details.secondary.dark};
  transition: .2s;
  text-align: center;
  border-radius: 4px;
  padding: 10px 10px;
  border: none;
  cursor: pointer;
  &:hover {
    color: white;
  }


 
`;

export default BlogCard
