import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Column from '../column/Column';
import Span from '../span/Span';
import cutString from 'shared/utils/cutString';

type TCardProps = {
    title: string;
    image: string;
  };

const EventCard = ({title,image}:TCardProps) => {
  return (
    <Container>
      <Link to={'/'}>
        <Column gap='14px'>
          <Image src={image}/>
          <Span fontSize="1.8rem" fontWeight='bold'>{cutString(title, 54)}</Span>
        </Column>
      </Link>
    </Container>
  )
}

const Container = styled.div`

 :hover{
    transform: scale(1.02);
 }
`;

const Image = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
`;

export default EventCard
