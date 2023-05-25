import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoBarca from 'shared/components/galeria/video/VideoBarca';
import ImageCarousel from 'shared/components/galeria/images/ImageCarousel';
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

const Pinacoteca = () => {


  const images = ['https://cdn.discordapp.com/attachments/1048588250421411861/1111098382245707796/20230330_101812_HDR.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1111098383264923698/20230330_101248_HDR.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1111098662639124572/20230330_100506_HDR.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1111098662949490688/20230330_100413_HDR.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1111098663293431928/20230330_100245_HDR.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1111098664006455347/20230330_095902_HDR.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1111098664312647791/20230330_095904_HDR.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1111098664727875645/20230330_100059_HDR.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1111099349129248788/20230330_103746_HDR.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1111099349708054628/20230330_103808_HDR.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1111099350693716008/20230330_104141_HDR.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1111099351775846530/20230330_104834_HDR.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1111099352182706176/20230330_104757_HDR.jpg', 'https://cdn.discordapp.com/attachments/1048588250421411861/1111099353088671744/20230330_104933_HDR.jpg'];



  return (
    <div>
      <GalleryWrapper>
        <ImageCarousel images={images} />

      </GalleryWrapper>
    </div>
  );
};

/**
     <ButtonWrapper>
        <button onClick={handleAddImage}>Add Image</button>
      </ButtonWrapper>
 * * */

export default Pinacoteca;