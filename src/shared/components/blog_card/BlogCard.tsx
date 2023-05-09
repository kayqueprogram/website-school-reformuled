import React from "react";
import styled from "styled-components";
import cutString from "shared/utils/cutString";
import Span from "../span/Span";
import { Link } from "react-router-dom";
import StylizedButton from "../stylized_button/StylizedButton";
import Column from "../column/Column";



type TCardProps = {
  id:string;
  title: string;
  image: string;
  content: string;
};

const BlogCard = ({id,title, image, content }: TCardProps) => {
  return (
    <Container>
      <Link to={`/blog/${id}`}>
        <Column>
          <CardImage src={image} alt={title} />
          {title && <Span fontSize="1.8rem" fontWeight='bold'>{cutString(title, 54)}...</Span>}
          {content && <Span fontSize="1.4rem">{cutString(content, 92)}...</Span>}
          <StylizedButton width="100%">
            <Link to='/'>Ler mais</Link>
          </StylizedButton>
        </Column>
      </Link>
    </Container>
  );
};

const Container = styled.div`

`;

const CardImage = styled.img`
 width: 100%;
 height: 30rem;
 object-fit: cover;
`;

export default BlogCard;
