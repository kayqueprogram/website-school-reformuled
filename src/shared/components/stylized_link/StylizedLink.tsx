import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type TProps = {
  children:React.ReactNode;
  to:string;
}

const StylizedLink = ({children,to,...styleProps}:TProps) => {

  const handleClick = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Container to={to} {...styleProps} onClick={handleClick}>
      {children}
    </Container>
  )
}

const Container = styled(Link)`
 
`;

export default StylizedLink
