import React from 'react';
import styled from 'styled-components';

const GalleryPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`;

const FolderWrapper = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
`;

const FolderTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 10px 0;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: #eee;
  border-radius: 5px;
  margin: 10px;
`;

const GalleryPage: React.FC = () => {
  return (
    <GalleryPageWrapper>
      <FolderWrapper>
        <FolderTitle>My Folder</FolderTitle>
        <ImageWrapper />
        <ImageWrapper />
        <ImageWrapper />
        <ImageWrapper />
      </FolderWrapper>
    </GalleryPageWrapper>
  );
};

export default GalleryPage;
