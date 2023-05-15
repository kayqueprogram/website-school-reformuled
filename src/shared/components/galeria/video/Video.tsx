import React, { useRef, useState } from 'react';
import styled from 'styled-components';

interface VideoPlayerProps {
  src: string;
  width?: string;
  height?: string;
}

const Videos: React.FC<VideoPlayerProps> = ({ src, width, height }) => {
  const videos = [{ id: 1, title: 'Entrevista 1', src: 'https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/entrevista1.mp4?alt=media&token=647dee36-4248-42cb-bab8-dbbac67aa237', }, { id: 2, title: 'Entrevista 2', src: 'https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/entrevista2.mp4?alt=media&token=18597d3c-6dc6-4a42-974f-e322f0812438', }, { id: 3, title: 'Entrevista 3', src: 'https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/entrevista3.mp4?alt=media&token=7165f51a-160e-40c6-aebd-06c4d269cd43', }, { id: 4, title: 'Entrevista 4', src: 'https://cdn.discordapp.com/attachments/1048588250421411861/1106348222814879814/WhatsApp_Video_2023-05-07_at_14.22.38.mp4', },];

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Container onClick={togglePlay}>
      {videos.map((video) => (
        <div key={video.id}>

          <StyledVideo
            ref={videoRef}
            src={video.src}
            width={width}
            height={height}
            controls
          />
          {!isPlaying && (
            <PlayButton>
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <polygon points="20,10 70,50 20,90" fill="white" />
              </svg>
            </PlayButton>
          )}

          <Title>{video.title}</Title>
        </div>
      ))}
    </Container>
  );
};

/**  <video controls height="100%" style={{ objectFit: 'cover' }}>
            <source src={video.src} type="video/mp4" />
          </video>
          
             {videos.map((video) => (
        <Video key={video.id}>
        
          
          <Title>{video.title}</Title>
        </Video>
      ))}**/

const Container = styled.div`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

const StyledVideo = styled.video`
      width: ${({ width }) => (width ? width : '100%')};
      height: ${({ height }) => (height ? height : 'auto')};
    `;

const PlayButton = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40%;
      height: auto;
      cursor: pointer;
    `;

const Title = styled.h2`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export default Videos;
