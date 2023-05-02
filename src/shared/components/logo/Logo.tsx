import React from 'react';
import Row from '../row/Row';
import pageIcons from 'shared/utils/pageIcons';
import Span from '../span/Span';


const Logo = () => {
  return (
    <Row alignItems='center' gap='0.6rem'>
      <pageIcons.SchoolHat fontSize='4.2rem'/>
      <Span fontSize='2.4rem' fontWeight='bold'>Omar Donato Bassani</Span>
    </Row>
  )
}

export default Logo
