import React from 'react';
import pageIcons from 'shared/utils/pageIcons';
import Row from 'shared/components/row/Row';
import Span from 'shared/components/span/Span';
import WideWrapping from 'shared/components/wide_wrapping/WideWrapping';
import styled from 'styled-components';

const TopBar = () => {
  return (
    <Container>
      <WideWrapping>
        <Row gap='2.6rem' alignItems='center'>
           <Row gap='8px' alignItems='center'>
             <pageIcons.Tel fontSize='1.2em'/>
             <Span fontSize='1.8rem'>Tel: +55 11 4354-7192</Span>
           </Row>
           <Row gap='8px' alignItems='center'>
             <pageIcons.Email fontSize='1.2em'/>
             <Span fontSize='1.8rem'>Email: coordenacaobassani2022@gmail.com</Span>
           </Row>
        </Row>
      </WideWrapping>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 1.8rem;
  background-color:${({theme})=> theme.colors.details.primary.dark};
  color: ${({theme})=> theme.colors.text.secondary.light};
`;

export default TopBar
