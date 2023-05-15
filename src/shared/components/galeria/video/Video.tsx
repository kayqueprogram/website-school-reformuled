import React from 'react';
import styled from 'styled-components';

const Videos = () => {
  const videos = [    {      id: 1,      title: 'Entrevista 1',      src: 'https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/entrevista2.mp4?alt=media&token=18597d3c-6dc6-4a42-974f-e322f0812438',    }, {     id: 2,    title: 'Entrevista 2',  src: 'https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/entrevista3.mp4?alt=media&token=7165f51a-160e-40c6-aebd-06c4d269cd43'   },   {   id: 3,   title: 'Entrevista 3',   src: 'https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/entrevista1.mp4?alt=media&token=647dee36-4248-42cb-bab8-dbbac67aa237'     }, {   id: 4, title: 'Entrevista 4',   src: 'https://cdn.discordapp.com/attachments/1048588250421411861/1106348222814879814/WhatsApp_Video_2023-05-07_at_14.22.38.mp4'}    ] 

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
  flex-direction: row;
  align-items: center;
  max-width: 400px;
  width: 100%;
  video {
    border-radius: 20px;
    width: 100%;
    max-width: 100%;
  }
`;


const Title = styled.h2`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export default Videos;
