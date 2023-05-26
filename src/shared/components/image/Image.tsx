import React from 'react';
import styled from 'styled-components';

type TProps = {
  src?:string;
  height?:string;
  maxHeight?:string;
}


const Image = ({src, ...props}:TProps) => {
  return (
    <Container src={src} {...props}/>
  )
}

const Container = styled.img<TProps>`
  width: 100%;
  filter: grayscale(0.14) sepia(0.12) saturate(0.81) hue-rotate(22deg) invert(0.06) brightness(1) contrast(1) blur(0px);
  max-height: ${({maxHeight})=>maxHeight || 'none'};
  height: ${({height})=> height || 'auto'};
  object-fit: cover;
  object-position: center;
`;

export default Image
