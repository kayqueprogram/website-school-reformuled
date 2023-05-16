import React from 'react';
import StyledNavLink from 'shared/components/styled_nav_link/StyledNavLink';
import styled from 'styled-components';

type TProps = {
  isRow:boolean
}

const Nav = ({isRow}:TProps) => {
  return (
    <Container isRow={isRow}>
        <StyledNavLink path='/' state='Home'/>
           <StyledNavLink path='/blog' state='Blog'/>
           <StyledNavLink path='/galeria' state='Galeria'/>
    </Container>
  )
}

const Container = styled.div<TProps>`
 width: ${({isRow})=> !isRow?'90%':'auto'};
 display: flex;
 font-size:${({isRow})=> !isRow?'3rem':'2.1rem'};
 flex-direction: ${({isRow})=>isRow?'row':'column'};

 
 &>*:not(:first-child){
  margin-left:${({isRow})=>isRow?'2.4rem':0};
  margin-top:${({isRow})=>!isRow?'3rem':0};
 }
`;

export default Nav
