import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

type DataTypes = {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
  };
  meaning: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
      synonims: string[];
    };
  };
}[];

enum SelectEnum {
  Sansserif = "Sans-Serif",
  Serif = "Serif",
  Mono = "Mono",
}

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelected] = useState<SelectEnum>(SelectEnum.Sansserif);
  const [fetchError, setFetchError] = useState<Error | null>(null);
  const [wordData, setWordData] = useState<DataTypes>();

  const handlePlayClick = () => {};

  if (fetchError) {
    return (
      <div>There was an error when fetching data: {fetchError.message}</div>
    );
  }
  return (
    <>
      <Header isChecked={isChecked} setIsChecked={setIsChecked} />
      <main>
        <h1 className="visuallyhidden">Dictionary web app</h1>
        <Form setWordData={setWordData} setFetchError={setFetchError} />
        {wordData && (
          <div>
            <h2>{wordData[0].word}</h2>
            <p>{wordData[0].phonetic}</p>
            <button onClick={handlePlayClick} type="button">
              <img src="/assets/images/icon-play.svg" alt="Play the sound" />
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
