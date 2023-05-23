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

const Website = () => {

  const [post, setPost] = useState<any>({});
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      if (id) {
        const data = await blogApi.getBlogPost(id);
        setPost(data);
      }
    };

    getPost();
  }, [id]);

  const images = ['https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/preview.png?alt=media&token=63647761-bfe2-4d14-b30e-bc551185eda1'];


  return (
    <div>
      <GalleryWrapper>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <img src={image} alt={`Image ${index}`} />
          </ImageWrapper>

        ))}
       
 
      </GalleryWrapper>
    </div>
  );
};

/**
     <ButtonWrapper>
        <button onClick={handleAddImage}>Add Image</button>
      </ButtonWrapper>
 * * */

export default Website;