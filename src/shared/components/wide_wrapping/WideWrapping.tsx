import React from 'react';
import { device } from 'shared/styles/breakPoints';
import styled from 'styled-components';

const WideWrapping = ({children}:{children:React.ReactNode}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
 width: 100%;
 max-width: ${({theme})=> theme.measures.max_wide_wrapping_width};
 margin: auto;
 padding: 0px 48px;
 

 @media ${device.md}{
  padding: 0px 26px;
 }
`;

export default WideWrapping
