import React from 'react';
import styled from 'styled-components';

type Props = {
  children:React.ReactNode;
  width?:string;
  alignItems?:'stretch'|'flex-start'|'flex-end'|'baseline'|'center';
  gap?:string;
}

const Column = ({children,...styleProps}:Props) => {
  return (
    <Container {...styleProps}>
      {children}
    </Container>
  )
}

const Container = styled.div<Omit<Props,'children'>>`
  width:${({width})=>width || 'auto'};
  display: flex;
  flex-direction: column;
  align-items:${({alignItems})=>alignItems || 'flex-start'};
  color: currentColor;

  &>*:not(:first-child){
    margin-top:${({gap})=>gap || '1rem'};
  }
`;

export default Column