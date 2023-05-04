import React from 'react'
import styled from 'styled-components'
import Column from '../column/Column';
import Span from '../span/Span';
import WideWrapping from '../wide_wrapping/WideWrapping';
import InfoCard from './InfoCard';
import CardGrid from '../card_grid/CardGrid';
import { device } from 'shared/styles/breakPoints';
import RemoveComponentSmallerScreen from '../remove_component_smaller_screen/RemoveComponentSmallerScreen';
import pageIcons from 'shared/utils/pageIcons';
import StylizedButton from '../stylized_button/StylizedButton';

const Banner = () => {
  return (
    <Container>
      <Image src='https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
       <WideWrapping>
         <Column>
           <Span fontSize='3.2rem'>
             THE BEST THEME FOR
           </Span>
           <Span fontSize='10rem' fontWeight='bold'>Education</Span>
           <StylizedButton path='/sobre'>
             Saiba Mais
           </StylizedButton>
         </Column>
         <RemoveComponentSmallerScreen>
          <InfoField>
           <WideWrapping>
              <CardGrid>
               <InfoCard
                title='Educação de qualidade para todos'
                src='/about'
                Icon={pageIcons.Star}
               />
               <InfoCard
                 title='Empoderando Mentes, Criando Futuros'
                 src='/about'
                 Icon={pageIcons.Idea}
               />
               <InfoCard
                 title='Explore, aprenda, descubra: visite nossa biblioteca'
                 src='/about'
                 Icon={pageIcons.Book}
                />
              </CardGrid>
            </WideWrapping>
           </InfoField>
         </RemoveComponentSmallerScreen>
        </WideWrapping>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80rem;
  background-color: #00000061;
  color: ${({theme})=>theme.colors.text.secondary.light};

  @media ${device.md} {
    min-height: 360px;
  }
`;

const Image = styled.img`
 position: absolute;
 z-index: -1;
 width: 100%;
 height: 100%;
 object-fit: cover;
`;

const InfoField = styled.div`
 width: 100%;
 position: absolute;
 left: 0;
 bottom: 9%;
`;




export default Banner
