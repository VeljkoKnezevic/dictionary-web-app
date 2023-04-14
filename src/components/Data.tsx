/* eslint-disable react/no-array-index-key */
import React from "react";
import AudioComponent from "./AudioComponent";
import { DataTypes } from "../DataTypes";

type DataType = {
  wordData: DataTypes;
};

const Data = ({ wordData }: DataType) => {
  return (
    <section className="data">
      <div className="data__wrapper">
        <div>
          <h2 className="data__heading">{wordData[0].word}</h2>
          <p className="data__pron">{wordData[0].phonetic}</p>
        </div>
        <AudioComponent wordData={wordData} />
      </div>
      {wordData.map((word) => {
        return word.meanings.map((meaning, index) => {
          return (
            <div className="data__meaning" key={index}>
              <p className="data__part-of-speech">{meaning.partOfSpeech}</p>
              <p className="data__light">Meaning</p>
              {meaning.definitions.map((definition, i) => {
                return (
                  <div className="data__definitions" key={i}>
                    <ul>
                      <li>{definition.definition}</li>
                    </ul>
                    {definition.example && <q>{definition.example}</q>}
                  </div>
                );
              })}
              {/* fix below */}
              {meaning.synonyms && <p className="data__light">Synonyms</p>}
              {meaning.synonyms &&
                meaning.synonyms.map((synonym, inde) => {
                  return (
                    <div className="data__flex" key={inde}>
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
    </section>
  );
};

export default Data;
