import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';
import Slide from 'shared/components/slide/Slide';
import { SwiperSlide } from 'swiper/react';
import galleryApi from 'services/gallery';
import Title from 'shared/components/title/Title';
import pageTheme from 'shared/styles/pageTheme';
import Row from 'shared/components/row/Row';
import Span from 'shared/components/span/Span';
import styled from 'styled-components';
import { device } from 'shared/styles/breakPoints';
import Grid from 'shared/components/grid/Grid';
import AudioPlayer from 'shared/components/galeria/audio/AudioPlayer';

const slideImgConfig = {
    navigation:true,
    breakpoints: {
      1024:{
        slidesPerView:1
      },
      600:{
        slidesPerView:1
      }
    },
    pagination:{
        type: "fraction",
    }
}

const slideVideoConfig = {
  navigation:true,
  pagination:{
    type: "fraction",
}
}

const Teste = () => {
  const [galleryData,setGalleryData] = useState<any>({});
  const { galleryId } = useParams();
   

  useEffect(()=>{
    const getGallery = async() =>{
      if(galleryId){
        const data = await galleryApi.getGalleryById(galleryId);
        data && setGalleryData(data);
      }
    }

    getGallery();

  },[galleryId]);

  console.log(galleryData)

  return (
    <SectionContainer
     backgroundColor={pageTheme.colors.details.primary.dark}
     color={pageTheme.colors.text.secondary.light}
    >
      <div>
        <Row padding='8rem 0rem 0rem 0rem' alignItems='center'>
          {galleryData?.name && <Title>{galleryData.name}</Title>}
          {galleryData?.year && <Span fontSize='2rem' >{galleryData.year}</Span>}
        </Row>
        {
         galleryData?.images && (
          <Slide slideConfig={slideImgConfig}>
             {
              galleryData?.images.map((image:string) => <SwiperSlide><GalleryImage height='78rem' src={image}/></SwiperSlide> )
             }
          </Slide>
         )
        }
        <div>
           {
             galleryData?.vids && (
              <>
                <Title>Vídeos</Title>
                <Slide slideConfig={slideVideoConfig}>
                {
                  galleryData?.vids.map((video:string)=> (<SwiperSlide key={video}>
                     <div>
                        <GalleryVideo controls>
                         <source src={video} type="video/mp4" />
                        </GalleryVideo>
                     </div>
                  </SwiperSlide>))
                }
               </Slide>
              </>
             )
           }
        </div>
        {
          galleryData?.auds && (
            <div>
              <Title>Áudios</Title>
              <AudiosField>
               {
                galleryData?.auds.map((audio:string) => <AudioPlayer src={audio} title={galleryData?.name}/>)
               }
              </AudiosField>
            </div>
          )
        }
      </div>
    </SectionContainer>
  )
}

const GalleryImage = styled.img`
  width: 100%;
  height: 60rem;
  object-fit: contain;

  @media ${device.md} {
    height: 60rem;
  }
`;


const GalleryVideo = styled.video`
  width: 100%;
  height: 80rem;
`;

const AudiosField = styled.div`
 display: flex;
 gap: 10px;
 flex-wrap: wrap;
`;

export default Teste
