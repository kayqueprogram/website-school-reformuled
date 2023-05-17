import React, { useState, useRef } from 'react';
import styled from 'styled-components';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Container>
      <Audio ref={audioRef} src={src} />
      <Controls>
        <PlayButton onClick={togglePlay}>
          <Icon className={isPlaying ? 'pause' : 'play'} />
        </PlayButton>
      </Controls>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Audio = styled.audio`
  
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #333;
  border-radius: 50%;
  margin-right: 8px;

  &.play {
    background-color: #333;
  }

  &.pause {
    background-color: #f00;
  }
`;

export default AudioPlayer;
