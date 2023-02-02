import React, { useState, useRef } from "react";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import music from "../assets/back-music.mp3";

const AudioPlay = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPauseSound = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {isPlaying ? (
        <RxSpeakerLoud
          className="ico"
          onClick={() => {
            playPauseSound();
          }}
        />
      ) : (
        <RxSpeakerOff
          className="ico"
          onClick={() => {
            playPauseSound();
          }}
        />
      )}
      <audio ref={audioRef} download={false} controlsList="nodownload">
        <source src={music} type="audio/mp3" />
      </audio>
    </>
  );
};

export default AudioPlay;
