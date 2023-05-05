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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.details.primary.dark};
  color: ${({ theme }) => theme.colors.text.secondary.light};
`;

export default Footer
