import React from 'react';
import styled from 'styled-components';
import Folder from '../../shared/components/galeria/GalleryFolder';
import DiaD from './DiaD';
import StyledNavLink from 'shared/components/styled_nav_link/StyledNavLink';
import { Link } from 'react-router-dom';


const GalleryPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.details.primary.dark};
`;


const Galeria: React.FC = () => {
  return (
    <GalleryPageWrapper>
      <Link to='/galeria/prjD'>
        <Folder title='Projeto dia D' year='2023' />
      </Link>
      <Link to='/galeria/pinacoteca'>
        <Folder title='Passeio á Pinacoteca' year='2023' />
      </Link>
      <Link to='/galeria/barcaDoInferno'>
        <Folder title='A Barca do Inferno' year='2022' />
      </Link>
    </GalleryPageWrapper>

  );
};

export default Galeria;
