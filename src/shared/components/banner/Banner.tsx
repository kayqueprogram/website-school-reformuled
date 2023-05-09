import React from 'react'
import styled from 'styled-components'
import Column from '../column/Column';
import Span from '../span/Span';
import WideWrapping from '../wide_wrapping/WideWrapping';
import CardGrid from '../grid/Grid';
import { device } from 'shared/styles/breakPoints';
import StylizedButton from '../stylized_button/StylizedButton';



type TProps = {
  labelTitle?:string;
  highlightedWord?:string;
  image?:string
  href?:string,
  btnLabel?:string;
}

const Banner = ({labelTitle,highlightedWord,image,href,btnLabel}:TProps) => {
  
  console.log(labelTitle)
  return (
    <Container>
      <Image src={image}/>
       <WideWrapping>
         <Column>
           {
            labelTitle && (<Span fontSize='3.2rem'>{labelTitle}</Span>)
           }
           {
            highlightedWord && (<Span fontSize='10rem' fontWeight='bold'>{highlightedWord}</Span>)
           }
           {
             href && (<StylizedButton path={href}>{btnLabel}</StylizedButton>) 
           }
         </Column>
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
  background-color: #00000065;
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
 object-position: bottom;
`;



export default Banner;
