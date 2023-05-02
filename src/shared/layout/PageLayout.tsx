import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const PageLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <Container>
      <Header/>
      <Main>
        {children}
      </Main>
      <Footer/>
    </Container>
  )
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

const Main = styled.div`
 height: 200vh;
`;

export default PageLayout
