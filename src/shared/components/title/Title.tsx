import React from 'react';
import styled from 'styled-components';

const Title = ({children}:{children:React.ReactNode}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.h1`
  width: 92%;
  font-size: 2.9rem;
  font-weight: 700;
  font-size: clamp(1em, 1.6em + 1.5vw, 3.3em);
`;

export default Title
