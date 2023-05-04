import React from 'react';
import SwiperCore,{Navigation} from 'swiper';
import {Swiper} from 'swiper/react';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/navigation';

type TSwiperProps = {
    children:React.ReactNode,
    slideConfig:{}
}
  
const Slide = ({children,slideConfig}:TSwiperProps) => {
  SwiperCore.use([Navigation]);

  return (
   <Container>
     <Swiper

      {...slideConfig}
     >
      {
        children
      }
    </Swiper>
   </Container>
  )
}

const Container = styled.div`
  .swiper{
    padding:6rem 0px;
  }
  
  .swiper-wrapper{
    align-items: stretch !important;
  }

 .swiper-slide {
  width: 100%;
  height: auto;
 }
`;

export default Slide
