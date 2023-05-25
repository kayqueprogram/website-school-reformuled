import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoBarca from 'shared/components/galeria/video/VideoBarca';

import Title from 'shared/components/title/Title';
import AudioPlayer from 'shared/components/galeria/audio/AudioPlayer';

const GalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: auto;
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


    const images = ['https://cdn.discordapp.com/attachments/1048588250421411861/1109255175069241485/teatro.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1109257332363374714/teatro1.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109623457576128582/IMG-20230519-WA0023.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624455623348285/20220803_074254.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109623457894907904/IMG-20230520-WA0002.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624455933730846/20220803_074405.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624456252493964/20220803_074505.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624456592240650/20220803_074527.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624457238155374/20220803_074859.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624458198650980/20220803_075430.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624879797518437/20220803_074918.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624880376324096/20220803_075445.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624880971927562/20220803_075658.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624881697529926/20220803_075831.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624882095996928/20220803_080125.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624882809032734/20220803_080749.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624883178127360/20220803_081738.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109624883538829353/20220803_081904.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109625259851776100/20220803_084424.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1109625260187324526/20220803_084338.jpg'];


    return (
        <div>
            <GalleryWrapper>
                {images.map((image, index) => (
                    <ImageWrapper key={index}>
                        <img src={image} alt={`Image ${index}`} />
                    </ImageWrapper>

                ))}
             
                    <Title>Vídeos</Title>
                    <VideoBarca />
             


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