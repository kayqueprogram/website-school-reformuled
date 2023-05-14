import React from 'react';
import styled from 'styled-components';
import Column from '../column/Column';
import Image from '../image/Image';
import Span from '../span/Span';
import cutString from 'shared/utils/cutString';

type TCardProps = {
    title: string;
    image: string;
  };

const EventCard = ({title,image}:TCardProps) => {
  return (
    <Container>
      <Column>
        <Image src={image}/>
        <DataField>
           <Column>
             <Span fontSize='2.2rem' fontWeight='bold'>{title}</Span>
           </Column>
        </DataField>
      </Column>
    </Container>
  )
}

const Container = styled.div`

 :hover{
  transition: .2s;
    transform: scale(1.02);
 }
`;

const DataField = styled.div`
 padding: 20px 0px;
`;



export default EventCard
