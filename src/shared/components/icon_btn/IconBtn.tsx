import React from 'react';
import styled from 'styled-components';

type TProps = {
  children:React.ReactNode;
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
}

const IconBtn = ({children,...btnProps}:TProps) => {
  return (
    <Container {...btnProps}>
      {children}
    </Container>
  )
}

const Container = styled.button<Omit<TProps,'children'>>`
  width: 30px;
  height: 30px;
  font-size: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color:${({theme})=> theme.colors.text.secondary.light};
  border: none;
  border-radius: 50%;
  background-color: ${({theme})=> theme.colors.details.primary.dark};
`;

export default IconBtn
