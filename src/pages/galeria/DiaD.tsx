import React from 'react';
import styled from 'styled-components';
import Videos from 'shared/components/galeria/video/Video';
import Row from 'shared/components/row/Row';
import WideWrapping from 'shared/components/wide_wrapping/WideWrapping';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';

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

const DiaD = () => {
  const images = ['https://cdn.discordapp.com/attachments/1098057370728403115/1104185974839324782/IMG-20230505-WA0004.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100910943002693732/20230426_192622.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908447865774201/IMG-20230426-WA0010.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908447622512670/IMG-20230426-WA0009.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908447391813652/IMG-20230426-WA0012.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908447114993724/IMG-20230426-WA0013.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101276495743307816/IMG-20230427-WA0282.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908446854955038/IMG-20230426-WA0011.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908446586507404/IMG-20230426-WA0014.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908446200635512/IMG-20230426-WA0015.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908445852516413/IMG-20230426-WA0016.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908296577232997/IMG-20230426-WA0026.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101283331397656637/IMG-20230427-WA0297.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908296187150386/IMG-20230426-WA0025.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908295876784168/IMG-20230426-WA0029.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908295574782013/IMG-20230426-WA0030.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1100908295281197177/IMG-20230426-WA0027.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101266972093726750/IMG-20230427-WA0269.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101267408330690620/IMG-20230427-WA0270.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101267941535776818/IMG-20230427-WA0272.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101267941812617299/IMG-20230427-WA0273.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101267942127173682/IMG-20230427-WA0274.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101268527538782299/IMG-20230427-WA0275.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101268527803015319/IMG-20230427-WA0276.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101268528079847444/IMG-20230427-WA0277.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101269274334593045/IMG-20230427-WA0278.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101269274594660532/IMG-20230427-WA0281.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101269274884059176/IMG-20230427-WA0280.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1101269275118927942/IMG-20230427-WA0279.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1104185972083667015/IMG-20230505-WA0021.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1104185974189203516/IMG-20230505-WA0006.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1104185974453440542/IMG-20230505-WA0005.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1104185973652328508/IMG-20230505-WA0009.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1104185973392285696/IMG-20230505-WA0011.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1104185973086105652/IMG-20230505-WA0014.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1103438306060009533/IMG-20230503-WA0002.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1103438305514754178/IMG-20230503-WA0000.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1103438305770623149/IMG-20230503-WA0003.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1103438306366197801/IMG-20230503-WA0001.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1104185972725387324/IMG-20230505-WA0016.jpg', 'https://cdn.discordapp.com/attachments/1098057370728403115/1104185972398235861/IMG-20230505-WA0017.jpg'];


  return (
    <SectionContainer backgroundColor='${({ theme }) => theme.colors.details.primary.dark}'>
      <WideWrapping>
        <GalleryWrapper>
          {images.map((image, index) => (
            <ImageWrapper key={index}>
              <img src={image} alt={`Image ${index}`} />
            </ImageWrapper>

          ))}
          <Row>Vídeos</Row>
          <Videos />
        </GalleryWrapper>
      </WideWrapping>
    </SectionContainer>
  );
};

/**
     <ButtonWrapper>
        <button onClick={handleAddImage}>Add Image</button>
      </ButtonWrapper>
 * * */

export default DiaD;