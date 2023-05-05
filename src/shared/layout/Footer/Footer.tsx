import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      Footer
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0px 2rem;
  background-color: ${({theme})=>theme.colors.details.primary.dark};
  color: ${({theme})=>theme.colors.text.secondary.light};
`;

export default Footer
