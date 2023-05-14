import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type TProps = {
 path:string,
 state:string
}

const StyledNavLink = ({path,state}:TProps) => {
  return (
    <Container to={path}>
      {state}
    </Container>
  )
}

const Container = styled(NavLink)`
  font-size: 1.8rem;
  padding: 6px;
  border-bottom: 3px solid transparent;
  border-radius: 2px;

  &.active {
    border-color: ${({theme})=>theme.colors.details.secondary.dark};
  }
`;

export default StyledNavLink
