import React from 'react';
import styled from 'styled-components';
import Column from 'shared/components/column/Column';
import Logo from 'shared/components/logo/Logo';
import Row from 'shared/components/row/Row';
import WideWrapping from 'shared/components/wide_wrapping/WideWrapping';
import Span from 'shared/components/span/Span';
import routesConfig from 'routes/routesConfig';
import StyledNavLink from 'shared/components/styled_nav_link/StyledNavLink';

const Footer = () => {
  return (
    <Container>
      <WideWrapping>
         <Grid>
           <Column>
              <Logo/>
              <span>Queremos o melhor para você</span>
           </Column>
           <Column>
              <Span textTransform='uppercase' fontWeight='bold'>
                CONTACT US
              </Span>
              <Span>
                coordenacaobassani2022@gmail.com
              </Span>
              <Span> +55 11 4354-7192</Span>
           </Column>
           <Column>
             {
              routesConfig.map(route => route.state && <StyledNavLink {...route}/>)
             }
           </Column>
         </Grid>
      </WideWrapping>
    </Container>
  )
}

const Container = styled.div`
 background-color: ${({theme})=>theme.colors.details.primary.dark};
 color: ${({theme})=>theme.colors.text.secondary.light};
 padding: 8rem 0rem;
`;

const Grid = styled.div`
 display: grid;
 grid-template-columns: auto auto auto;
 align-items: center;
`;

export default Footer

