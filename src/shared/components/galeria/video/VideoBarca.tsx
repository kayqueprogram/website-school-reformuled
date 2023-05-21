import React from 'react';
import styled from 'styled-components';

const VideoBarca = () => {
  const videos = [    {      id: 1,      title: 'Peça teatral - A Barca do Inferno',      src: 'https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/teatro.mp4?alt=media&token=d484712f-f597-4921-b298-9d71b3568739',    }  ] 

  return (
    <Container>
      {videos.map((video) => (
        <Video key={video.id}>
          <video controls>
            <source src={video.src} type="video/mp4" />
          </video>
          <Title>{video.title}</Title>
        </Video>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.secondary.light};
`;

const Video = styled.div`
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 400px;
  width: 100%;
  video {
    border-radius: 20px;
    width: 100%;
    max-width: 100%;
  }
`;


const Title = styled.h1`
display: block;
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export default VideoBarca;
