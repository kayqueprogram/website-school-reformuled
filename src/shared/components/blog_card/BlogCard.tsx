import React from "react";
import styled from "styled-components";
import cutString from "shared/utils/cutString";
import Span from "../span/Span";
import Column from "../column/Column";

type TCardProps = {
  title: string;
  image: string;
  content: string;
};

const BlogCard = ({ title, image, content }: TCardProps) => {
  return (
    <CardContainer>
        <CardImage src={image} alt={title} />
         {title && <Span fontSize="2.2rem" fontWeight='bold'>{cutString(title, 48)}...</Span>}
         {content && <Span fontSize="1.8rem">{cutString(content, 92)}...</Span>}
        <CardButton>
          <a href="#">Ler mais</a>
        </CardButton>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  height: 100%;
  padding: 4px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.02);
  }
  
  &>*:not(:first-child){
    margin-top: 10px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.details.secondary.dark};
  transition: 0.2s;
  text-align: center;
  border-radius: 4px;
  padding: 10px 10px;
  border: none;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export default BlogCard;
