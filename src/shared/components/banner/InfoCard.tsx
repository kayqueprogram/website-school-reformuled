import React from 'react';
import styled from 'styled-components';
import {IconType} from 'react-icons'
import Row from '../row/Row';
import Column from '../column/Column';
import Span from '../span/Span';
import pageIcons from 'shared/utils/pageIcons';
import pageTheme from 'shared/styles/pageTheme';

type Props = {
  title:string,
  src:string,
  Icon:IconType
}

const InfoCard = ({title,src,Icon}:Props) => {
  return (
    <Container>
      <Row gap="1.2vw" alignItems='center'>
        <Icon fontSize='6rem' color={pageTheme.colors.details.secondary.dark}/>
        <Column gap='1.3rem'>
          <Span  maxWidth='96%' fontSize='2rem' fontWeight='bold' textTransform='uppercase'>
            BEST INDUSTRY LEADERS
          </Span>
          <Span textTransform='uppercase' fontWeight='bold' color={pageTheme.colors.details.secondary.dark}>
            <Row>
                <div >VIEW MORe</div>
                <pageIcons.ArrowRight/>
            </Row>
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
