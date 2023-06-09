import React from 'react';
import styled from 'styled-components';

type Props = {
  children:React.ReactNode;
  textAlign?:string;
}

const Paragraph = ({children,...styleProps}:Props) => {
  return (
    <Container {...styleProps}>
      {children}
    </Container>
  )
}

const Container = styled.p<Omit<Props,'children'>>`
  width: 96%;
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 240%;
  text-align:${({textAlign})=>textAlign || 'justify'};
`;

export default Paragraph;