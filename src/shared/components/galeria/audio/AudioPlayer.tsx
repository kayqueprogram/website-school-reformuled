import React, { useState , useRef} from 'react';
import styled from 'styled-components';

const AudioPlayerWrapper = styled.div`
  background-color: #f8f8f8;
  color: #000;
  border-radius: 10px;
  padding: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ControlButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin: 0 10px;
  cursor: pointer;
`;

const AudioPlayer = ({ src, title }: { src: string, title?: string }) => {
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

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  return (
    <AudioPlayerWrapper>
      <div>{title}</div>
      <ControlsWrapper>
        <ControlButton onClick={skipBackward}>⏪</ControlButton>
        <ControlButton onClick={togglePlay}>{isPlaying ? '⏸️' : '▶️'}</ControlButton>
        <ControlButton onClick={skipForward}>⏩</ControlButton>
      </ControlsWrapper>
      <audio ref={audioRef} src={src} />
    </AudioPlayerWrapper>
  );
};

export default AudioPlayer;