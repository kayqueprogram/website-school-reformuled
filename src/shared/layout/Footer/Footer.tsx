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
 padding: 0px 2rem;
 background-color: ${({theme})=>theme.colors.details.primary.dark};
 color: ${({theme})=>theme.colors.text.secondary.light};
`;

export default Footer
