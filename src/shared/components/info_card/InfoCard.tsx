import React from 'react';
import { Link } from 'react-router-dom';
import Row from '../row/Row';
import Column from '../column/Column';
import Span from '../span/Span';
import pageTheme from 'shared/styles/pageTheme';
import pageIcons from 'shared/utils/pageIcons';
import { IconType } from 'react-icons';
import styled from 'styled-components';

type Props = {
    title:string;
    src:string;
    Icon:IconType;
}

const InfoCard = ({title,src,Icon}:Props) => {
  return (
    <Container>
      <Row gap="1.2vw" alignItems='center'>
        <Icon fontSize='6rem' color={pageTheme.colors.details.secondary.dark}/>
        <Column gap='1.3rem'>
          <Span  maxWidth='96%' fontSize='2rem' fontWeight='bold' textTransform='uppercase'>
          Educação de qualidade para todos
          </Span>
          <Span textTransform='uppercase' fontWeight='bold' color={pageTheme.colors.details.secondary.dark}>
            <Link to={src}>
              <Row>
                <span>VEJA MAIS</span>
                <pageIcons.ArrowRight/>
              </Row>
            </Link>
          </Span>
        </Column>
      </Row>
    </Container>
  )
}

const Container = styled.div`
 background-color: #00000088;
 padding: 2.2rem 1.4rem;
`;

export default InfoCard
