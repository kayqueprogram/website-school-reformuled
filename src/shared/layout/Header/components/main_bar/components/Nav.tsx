import React from 'react';
import StyledNavLink from 'shared/components/styled_nav_link/StyledNavLink';
import styled from 'styled-components';

type TProps = {
  isRow:boolean
}

const Nav = ({isRow}:TProps) => {
  return (
    <Container isRow={isRow}>
        <StyledNavLink path='/' label='Home'/>
           <StyledNavLink path='/sobre' label='Sobre'/>
           <StyledNavLink path='/blog' label='Blog'/>
           <StyledNavLink path='/galeria' label='Galeria'/>
    </Container>
  )
}

const Container = styled.div<TProps>`
 display: flex;
 flex-direction: ${({isRow})=>isRow?'row':'column'};
 
 &>*:not(:first-child){
  margin-left:${({isRow})=>isRow?'2.4rem':0};
  margin-top:${({isRow})=>!isRow?'2rem':0};
 }
`;

export default Nav
