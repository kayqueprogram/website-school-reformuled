import React from 'react';
import styled from 'styled-components';
import Folder from '../shared/components/GalleryFolder'

const GalleryPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`;


const Gallery: React.FC = () => {
  return (
    <GalleryPageWrapper>
        <Folder title='Projeto dia D' />
       
        <Folder title='Projeto dia D' />
    </GalleryPageWrapper>
  );
};

export default Gallery;
