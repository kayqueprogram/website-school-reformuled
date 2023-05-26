import React from 'react';
import SwiperCore,{Navigation,Pagination} from 'swiper';
import {Swiper} from 'swiper/react';
import styled from 'styled-components';
import { device } from 'shared/styles/breakPoints';

import 'swiper/css';
import 'swiper/css/navigation';

type TSwiperProps = {
    children:React.ReactNode,
    slideConfig:{}
}
  
const Slide = ({children,slideConfig}:TSwiperProps) => {
  SwiperCore.use([Navigation,Pagination]);

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
    padding:6rem 8px;
  }
  
  .swiper-wrapper{
    align-items: stretch !important;
  }

 .swiper-slide {
  width: 100%;
  height: auto;
 }

 .swiper-button-prev,
 .swiper-button-next{
  color: ${({theme})=>theme.colors.details.primary.dark};

 }

 .swiper-button-prev::after,
 .swiper-button-next::after{
  font-size: 6rem;
 }

 .swiper-pagination{
  padding: 10px 0px;
  font-size: 20px;
 }

 @media ${device.md}{
  .swiper{
    padding: 2rem 0px;
  }
 }
`;

export default Slide
