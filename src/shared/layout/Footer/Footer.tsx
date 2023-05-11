import React from 'react';
import styled from 'styled-components';
import WideWrapping from 'shared/components/wide_wrapping/WideWrapping';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <WideWrapping>
      <Container>

        <div>Footer</div> - <div>footer</div>
        <Button onClick={handleClick}>
          ^
        </Button>

      </Container>
    </WideWrapping>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.details.primary.dark};
  color: ${({ theme }) => theme.colors.text.secondary.light};
`;

const Button = styled.button`
  padding: 24px;
  background-color: blue;
  border: none;
  cursor: pointer;
  color: white;
`;

export default Footer
