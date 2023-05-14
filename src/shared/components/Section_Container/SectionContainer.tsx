import React from 'react';
import WideWrapping from '../wide_wrapping/WideWrapping';
import styled from 'styled-components';
import Title from '../title/Title';
import Span from '../span/Span';
import Column from '../column/Column';
import pageTheme from 'shared/styles/pageTheme';


type Props = {
  children: React.ReactNode;
  title?:string;
  subtitle?:string;
  color?:string;
  backgroundColor?:string;
  isRelative?:boolean;
}

const SectionContainer = ({children,title,subtitle,isRelative,color,backgroundColor}:Props) => {
  return (
    <Container backgroundColor={backgroundColor} isRelative={isRelative} color={color}>
      <WideWrapping>
        {
          title && (
           <Header>
             <>
               <Title>{title}</Title>
               {subtitle && <Span maxWidth='80%' lineHeight='1.5' fontSize='2.8rem' fontWeight='600'>{subtitle}</Span>}
             </>
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
 padding: 8rem 0rem;
 color:${({color})=>color || 'currentColor'};
 background-color: ${({backgroundColor})=>backgroundColor || 'transparent'};

`;

const Header = styled.div`
 width: 100%;
 padding: 10px 0px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;

 &>*:not(:first-child){
  margin-top: 8px;
 }
`;


export default SectionContainer;