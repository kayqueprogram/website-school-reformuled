import React from 'react';
import WideWrapping from '../wide_wrapping/WideWrapping';
import styled from 'styled-components';
import Title from '../title/Title';
import Span from '../span/Span';
import Column from '../column/Column';



type Props = {
  children: React.ReactNode;
  title?:string;
  subTitle?:string;
  color?:string;
  backgroundColor?:string;
  isRelative?:boolean;
}

const SectionContainer = ({children,title,subTitle,isRelative,color,backgroundColor}:Props) => {
  return (
    <Container backgroundColor={backgroundColor} isRelative={isRelative} color={color}>
      <WideWrapping>
        {
          title && (
           <Header>
             <Column alignItems='center' gap='1.4rem'>
               <Title>{title}</Title>
                {subTitle && (
                <Span fontSize='2.1rem'>
                 {subTitle}
                </Span>
                )
                } 
              </Column>
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
 display: flex;
 flex-direction:column;
 align-items: flex-start;
 text-align: center;
 margin-bottom: 5.4rem;
`;


export default SectionContainer;