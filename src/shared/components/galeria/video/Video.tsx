import React from 'react';
import "node_modules/video-react/dist/video-react.css"
import styled from 'styled-components';
import { Player } from 'video-react';

const Videos = () => {
  const videos = [{ id: 1, title: 'Entrevista 1', src: 'https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/entrevista1.mp4?alt=media&token=647dee36-4248-42cb-bab8-dbbac67aa237', }, { id: 2, title: 'Entrevista 2', src: 'https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/entrevista2.mp4?alt=media&token=18597d3c-6dc6-4a42-974f-e322f0812438', }, { id: 3, title: 'Entrevista 3', src: 'https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/entrevista3.mp4?alt=media&token=7165f51a-160e-40c6-aebd-06c4d269cd43', }, { id: 4, title: 'Entrevista 4', src: 'https://cdn.discordapp.com/attachments/1048588250421411861/1106348222814879814/WhatsApp_Video_2023-05-07_at_14.22.38.mp4', },];

  return (
    <Container>
      {videos.map((video) => (
        <Video key={video.id}>
          <Player
            playsInline
            src={video.src}
          />
          <Title>{video.title}</Title>
        </Video>
      ))}
    </Container>
  );
};

/**  <video controls height="100%" style={{ objectFit: 'cover' }}>
            <source src={video.src} type="video/mp4" />
          </video>**/ 

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.secondary.light};
`;

const Video = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  padding-bottom: 56.25%;
`;

const Title = styled.h2`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export default Videos;
