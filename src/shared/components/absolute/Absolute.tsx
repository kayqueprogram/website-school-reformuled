import React from 'react';
import styled from 'styled-components';

type TProps = {
  children:React.ReactNode
  bottom?:number;
  top?:number;
  left?:number;
  right?:number
}

const Absolute = ({children,...styleProps}:TProps) => {
  return (
    <Container {...styleProps}>
      {children}
    </Container>
  )
}

const Container = styled.div<Omit<TProps,'children'>>`
 position: absolute;
 width: 100%;
 top: ${({top})=>top || 'auto'};
 bottom: ${({bottom})=>bottom || 'auto'};
 left: ${({left})=>left || 0};
 right: ${({right})=>right || 'auto'};
`;

export default Absolute
