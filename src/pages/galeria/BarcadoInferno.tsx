import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Videos from 'shared/components/galeria/video/Video';
import blogApi from 'services/blog';
import { useParams } from 'react-router-dom';
import Title from 'shared/components/title/Title';
import AudioPlayer from 'shared/components/galeria/audio/AudioPlayer';

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: auto;
  border-radius: 23px;
  background-color: ${({ theme }) => theme.colors.details.primary.dark};
  color: ${({ theme }) => theme.colors.text.secondary.light};
  padding: 20px;
  padding-top: 100px;
`;

const ImageWrapper = styled.div`
  width: 30%;
  margin-bottom: 20px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

margin: auto;
border-radius: 23px;
color: ${({ theme }) => theme.colors.text.secondary.light};
padding: 20px;
padding-top: 100px;
`

const Barcadoinferno = () => {


  const images = ['https://cdn.discordapp.com/attachments/1048588250421411861/1109255175069241485/teatro.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1109257332363374714/teatro1.jpg' ];


  return (
    <div>
      <GalleryWrapper>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <img src={image} alt={`Image ${index}`} />
          </ImageWrapper>

        ))}
        <Title>Vídeos</Title>
        videos
       
 
      </GalleryWrapper>
    </div>
  );
};

/**
     <ButtonWrapper>
        <button onClick={handleAddImage}>Add Image</button>
      </ButtonWrapper>
 * * */

export default Barcadoinferno;