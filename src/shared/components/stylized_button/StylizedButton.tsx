import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
 
type TProps = {
  children:React.ReactNode;
  path?:string;
  width?:string;
}

const StylizedButton = ({children,path,...styleProps}:TProps) => {
  return (
    <>
      <Container {...styleProps}>
        {
          path?
          (<Link to={path}>{children}</Link>)
          :children
        }
      </Container>
    </>
  )
}
const Container = styled.button<Omit<TProps,'children'>>`
 width: ${({width})=> width || 'auto'};
 font-size: 1.8rem;
 padding: 14px 2vw;
 border: none;
 font-weight: bold;
 background-color: ${({theme})=>theme.colors.details.secondary.dark};
 cursor: pointer;
`;

export default StylizedButton
