import React from 'react';
import styled from 'styled-components';

const CardGrid = ({children}:{children:React.ReactNode}) => {
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

export default CardGrid
