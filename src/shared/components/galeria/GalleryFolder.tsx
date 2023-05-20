import React from 'react';
import styled from 'styled-components';

interface FolderProps {
  title: string;
  year: string;
}

const FolderWrapper = styled.div`
  margin: auto;
  width: 200px;
  height: 150px;
  background-color: #f5f5f5;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

const FolderIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e2e2e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const FolderTitle = styled.h3`
  font-size: 16px;
  margin: 0;
`;

const Folder: React.FC<FolderProps> = ({ title, year }) => {
  return (
    <FolderWrapper>
      <FolderIcon>
        <i className="fa fa-folder"></i>
      </FolderIcon>
      <FolderTitle>{title} - <aside>{year}</aside></FolderTitle>
    </FolderWrapper>
  );
};

export default Folder;
