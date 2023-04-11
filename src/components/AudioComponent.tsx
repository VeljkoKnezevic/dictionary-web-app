import React from "react";
import { DataTypes } from "../DataTypes";

type WordDataTypes = {
  wordData: DataTypes;
};

const AudioComponent = ({ wordData }: WordDataTypes) => {
  let audio: HTMLAudioElement;

  if (wordData !== undefined) {
    let audioSrc;

    wordData[0].phonetics.forEach((element) => {
      audioSrc = element.audio ? element.audio : "";
    });

    audio = new Audio(audioSrc);
  }

  const handlePlayClick = () => {
    audio.play();
  };

  return (
    <button type="button" onClick={handlePlayClick}>
      <img
        src="/assets/images/icon-play.svg"
        alt="Play the pronunciation of the word"
      />
    </button>
  );
};

export default AudioComponent;
