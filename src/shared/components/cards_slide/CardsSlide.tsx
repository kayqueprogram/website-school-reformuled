import React,{useEffect, useRef, useState} from 'react';
import {SwiperSlide} from 'swiper/react';
import styled from 'styled-components';
import Slide from '../slide/Slide';
import Row from '../row/Row';
import pageIcons from 'shared/utils/pageIcons';


type TProps = {
    CardComponent:React.FC<any>;
    cardPath:string;
    data:Array<any>;
}

const slideConfig = {
  spaceBetween:20,
  breakpoints: {
    2856:{
      slidesPerView:4
    },
    900:{
      slidesPerView:3
    },
    600:{
      slidesPerView:2
    },
    320:{
      slidesPerView:1
    }
  }
}

const CardsSlide = ({CardComponent,cardPath,data}:TProps) => {
  const [refIsNotNull,setRefIsNotNull] = useState(false);
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)
  const nav = {navigation:{
    prevEl: navigationPrevRef.current!, 
    nextEl: navigationNextRef.current!, 
  }}

  console.log(data)

  useEffect(()=>{
    if(navigationNextRef.current || navigationPrevRef.current){
      setRefIsNotNull(true)
    }

  },[navigationNextRef.current,navigationPrevRef.current])
 
  return (
    <>
     {
        (data) && (
         <Container>
          <Row justifyContent='flex-end'>
            <Row gap='1rem'>
              <BtnControl ref={navigationPrevRef}>
                 <pageIcons.ArrowLeft/>
              </BtnControl>
              <BtnControl ref={navigationNextRef}>
                 <pageIcons.ArrowRight/>
              </BtnControl>
            </Row>
          </Row>
          <Slide
              slideConfig={{...nav,...slideConfig}}
            >
              {
                data.map((el)=>(
                   <SwiperSlide key={el?.id}>
                     <CardComponent {...el} path={cardPath}/>
                   </SwiperSlide>
                 )
                 )
              }
          </Slide>
        </Container>
        )
     }
    </>
  )
}

const Container = styled.div``;

const BtnControl = styled.button`
 font-size: 2.6rem;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 5px;
 border:1px solid currentColor;
 color:currentColor;
 background-color: transparent;
 outline: none;
 cursor: pointer;

 &.swiper-button-disabled{
  opacity:0.3;
  cursor:default;
 }
`;

export default CardsSlide
