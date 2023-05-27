import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type TProps = {
 path:string,
 state:string
}

const StyledNavLink = ({path,state}:TProps) => {
 
  const handleClick = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Container to={path} onClick={handleClick}>
      {state}
    </Container>
  )
}

const Container = styled(NavLink)`
  width: 100%;
  padding: 6px;
  border-bottom: 3px solid transparent;
  border-radius: 2px;

  &.active {
    border-color: ${({theme})=>theme.colors.details.secondary.dark};
  }

  &:hover {
    border-color: ${({theme})=>theme.colors.details.secondary.dark};
  }
`;

export default StyledNavLink
