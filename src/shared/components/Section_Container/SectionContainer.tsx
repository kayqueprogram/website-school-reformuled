import React from 'react';
import WideWrapping from '../wide_wrapping/WideWrapping';
import styled from 'styled-components';
import Title from '../title/Title';
import Span from '../span/Span';
import Column from '../column/Column';



type Props = {
  children: React.ReactNode;
  title?:string;
  color?:string;
  backgroundColor?:string;
  isRelative?:boolean;
}

const SectionContainer = ({children,title,isRelative,color,backgroundColor}:Props) => {
  return (
    <Container backgroundColor={backgroundColor} isRelative={isRelative} color={color}>
      <WideWrapping>
        {
          title && (
           <Header>
              <Title>{title}</Title>
           </Header>
          )
        }
        {children}
      </WideWrapping>
    </Container>
  )
}

const Container = styled.section<{backgroundColor?:string,isRelative?:boolean,color?:string}>`
 width: 100%;
 position: ${({isRelative})=>isRelative?'relative':'static'};
 padding: 7.6rem 0rem;
 color:${({color})=>color || 'currentColor'};
 background-color: ${({backgroundColor})=>backgroundColor || 'transparent'};

`;

const Header = styled.div`
 position: relative;
 display: flex;
 flex-direction:column;
 align-items: flex-start;
 text-align: center;
 margin-bottom: 5.4rem;

 ::after{
  content:'';
  position: absolute;
  left: 0;
  bottom: -2.6rem;
  width: 20rem;
  height: 4px;
  border-radius: 20px;
  background-color:${({theme})=>theme.colors.details.secondary.dark};
 }
`;


export default SectionContainer;