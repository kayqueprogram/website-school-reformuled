import React from 'react';
import Row from '../row/Row';
import pageIcons from 'shared/utils/pageIcons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Span from '../span/Span';


const Logo = () => {
  return (
    <Link to='/'>
      <Row alignItems='center' gap='0.6rem'>
       <pageIcons.SchoolHat fontSize='4.2rem'/>
       <h1><Span fontWeight='bold' fontSize='2.6rem'>Omar Donato Bassani</Span></h1>
     </Row>
    </Link>
  )
}



export default Logo
