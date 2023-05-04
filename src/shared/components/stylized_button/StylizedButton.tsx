import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
 
type TProps = {
  children:React.ReactNode,
  path?:string
}

const StylizedButton = ({children,path}:TProps) => {
  return (
    <>
      {
        path?(
          <Container>
            <Link to={path}>{children}</Link>
          </Container>
        ):(
          <Container>
            {children}
          </Container>
        )
      }
    </>
  )
}
const Container = styled.button`
 font-size: 1.8rem;
 padding: 14px 2vw;
 border: none;
 font-weight: bold;
 background-color: ${({theme})=>theme.colors.details.secondary.dark};
`;

export default StylizedButton
