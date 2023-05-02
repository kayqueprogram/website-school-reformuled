import React from 'react';
import { device } from 'shared/styles/breakPoints';
import styled from 'styled-components';

const RemoveComponentSmallerScreen = ({children}:{children:React.ReactNode}) => {
  return (
    <Container>
      {
        children
      }
    </Container>
  )
}

const Container  = styled.div`
 @media ${device.md} {
    display: none;
 }
`;

export default RemoveComponentSmallerScreen
