import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type TProps = {
  children:React.ReactNode;
  to:string;
}

const StylizedLink = ({children,to,...styleProps}:TProps) => {
  return (
    <Container to={to} {...styleProps}>
      {children}
    </Container>
  )
}

const Container = styled(Link)`
 
`;

export default StylizedLink
