import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import PlayIcon from '../../../../../public/play.svg';
import PauseIcon from '../../../../../public/pause.svg';
import BackwardIcon from '../../../../../public/backward.svg';
import ForwardIcon from '../../../../../public/foward.svg';

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

  const handleForward = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime += 10; // Avança 10 segundos
  };

  const handleBackward = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime -= 10; // Retrocede 10 segundos
  };

  return (
    <Container>
      <audio ref={audioRef} src={src} />
      <Controls>
        <PlayButton onClick={togglePlay}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </PlayButton>
        <ControlButton onClick={handleBackward}>
          <BackwardIcon />
        </ControlButton>
        <ControlButton onClick={handleForward}>
          <ForwardIcon />
        </ControlButton>
      </Controls>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const PlayButton = styled(Button)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

const ControlButton = styled(Button)`
  margin: 0 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default AudioPlayer;
