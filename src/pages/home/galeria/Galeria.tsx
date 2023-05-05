import React from 'react';
import styled from 'styled-components';
import Folder from '../../../shared/components/galeria/GalleryFolder';
import DiaD from './DiaD';
import StyledNavLink from 'shared/components/styled_nav_link/StyledNavLink';
import { NavLink } from 'react-router-dom';


const GalleryPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #062f67;
`;


const Galeria: React.FC = () => {
  return (
      <GalleryPageWrapper>
     <StyledNavLink path='/contato' label='Contato'/>
       <a href="#">
          <Folder title='Projeto dia D' />
       </a>

    </GalleryPageWrapper>

  );
};

export default Galeria;
