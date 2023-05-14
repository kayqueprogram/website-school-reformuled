import React from 'react'
import styled from 'styled-components'
import Column from '../column/Column';
import Span from '../span/Span';
import WideWrapping from '../wide_wrapping/WideWrapping';
import CardGrid from '../grid/Grid';
import { device } from 'shared/styles/breakPoints';
import StylizedButton from '../stylized_button/StylizedButton';
import Image from '../image/Image';


type TProps = {
  title?:string;
  image?:string
  href?:string,
  btnLabel?:string;
}

const Banner = ({title,image,href,btnLabel}:TProps) => {
  
  return (
    <Container>
      <Absolute>
        <Image height='100%' src={image}/>
      </Absolute>
       <WideWrapping>
         <TextField>
          <Column gap='3rem'>
           {
            title && (<Span maxWidth={'80%'} fontWeight='bold' fontSize='6rem'>{title}</Span>)
           }
  
           {
             href && (<StylizedButton path={href}>{btnLabel}</StylizedButton>) 
           }
         </Column>
         </TextField>
        </WideWrapping>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 92rem;
  background-color: #12121381;
  color: ${({theme})=>theme.colors.text.secondary.light};

  @media ${device.md} {
    min-height: 360px;
  }
`;

const TextField = styled.div`
 max-width: 880px;
`;

const Absolute = styled.div`
 position: absolute;
 z-index: -1;
 width: 100%;
 height: 100%;

`;



export default Banner;
