/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import AudioComponent from "./components/AudioComponent";
import { DataTypes } from "./DataTypes";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [wordData, setWordData] = useState<DataTypes>();

  return (
    <>
      <Header isChecked={isChecked} setIsChecked={setIsChecked} />
      <main>
        <h1 className="visuallyhidden">Dictionary web app</h1>
        <Form setWordData={setWordData} />
        {wordData && (
          <div className="data">
            <div className="data__wrapper">
              <h2 className="data__heading">{wordData[0].word}</h2>
              <p className="data__pron">{wordData[0].phonetic}</p>
              <AudioComponent wordData={wordData} />
            </div>
            {wordData.map((word) => {
              return word.meanings.map((meaning, index) => {
                return (
                  <div className="data__meaning" key={index}>
                    <p className="data__part-of-speech">
                      {meaning.partOfSpeech}
                    </p>
                    <p className="data__light">Meaning</p>
                    {meaning.definitions.map((definition, index) => {
                      return (
                        <div className="data__definitions" key={index}>
                          <ul>
                            <li>{definition.definition}</li>
                          </ul>
                          {definition.example && <q>{definition.example}</q>}
                        </div>
                      );
                    })}
                    {meaning.synonyms &&
                      meaning.synonyms.map((synonym, index) => {
                        return (
                          <div className="data__flex" key={index}>
                            <p className="data__light">Synonyms</p>
                            <p className="data__synonym">{synonym}</p>
                          </div>
                        );
                      })}
                  </div>
                );
              });
            })}
            <div className="data__flex">
              <p className="data__source">Source</p>
              <a className="data__link" href={wordData[0].sourceUrls[0]}>
                {wordData[0].sourceUrls[0]}
              </a>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
