import React from 'react';
import styled from 'styled-components';

type TProps = {
  children:React.ReactNode
}

const Grid = ({children}:TProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
 width: 100%;
 display: grid;
 gap: 0.6rem;
 grid-template-columns: repeat(auto-fit,minmax(14rem,1fr));
`;

export default Grid
