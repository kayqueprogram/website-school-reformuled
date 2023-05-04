import React from 'react';
import styled from 'styled-components';
import Folder from '../shared/components/GalleryFolder'
import PageLayout from 'shared/layout/PageLayout';

const GalleryPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  backgound-color: #062f67;
`;


const Galeria: React.FC = () => {
  return (
      <GalleryPageWrapper>
        <Folder title='Projeto dia D' />
       
        <Folder title='Projeto dia D' />
    </GalleryPageWrapper>

  );
};

export default Galeria;
