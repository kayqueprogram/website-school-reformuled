import React from 'react';
import styled from 'styled-components';

type Props = {
    children:React.ReactNode,
    maxWidth?:string
    fontSize?:string,
    fontWeight?:number | string,
    textTransform?:string
    color?:string
}

const Span = ({children,...styleProps}:Props) => {
  return (
    <Container {...styleProps}>
      {children}
    </Container>
  )
}

const Container = styled.span<Omit<Props,'children'>>`
 max-width: ${({maxWidth})=> maxWidth || 'none'};
 font-size: ${({fontSize})=>fontSize || '1em'};
 font-weight: ${({fontWeight})=>fontWeight || 'normal'};
 text-transform: ${({textTransform})=> textTransform || 'normal'};
 color:${({color})=>color|| 'currentColor'};
`;

export default Span;
