import React from "react";
import key from "weak-key";
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
        return word.meanings.map((meaning) => {
          return (
            <div className="data__meaning" key={key(meaning)}>
              <p className="data__part-of-speech">{meaning.partOfSpeech}</p>
              <p className="data__light">Meaning</p>
              <div className="data__definitions">
                <ul className="data__list">
                  {meaning.definitions.map((definition) => {
                    return (
                      <li key={key(definition)} className="data__list__item">
                        {definition.definition}
                      </li>
                    );
                  })}
                </ul>
                {meaning.definitions.map((definition) => {
                  return definition.example ? (
                    <q key={key(definition)} className="data__quote">
                      {definition.example}
                    </q>
                  ) : (
                    ""
                  );
                })}
              </div>

              {meaning.synonyms.length > 0 ? (
                <div className="data__synonyms">
                  <p className="data__light data__light--synonyms">Synonyms</p>
                  {meaning.synonyms.map((synonym) => {
                    return (
                      <p
                        key={key(meaning.synonyms)}
                        className="data__synonyms__text"
                      >
                        {synonym}
                      </p>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        });
      })}
      <div className="data__source">
        <a className="data__source__text" href={wordData[0].sourceUrls[0]}>
          Source
        </a>
        <a className="data__source__link" href={wordData[0].sourceUrls[0]}>
          {wordData[0].sourceUrls[0]}
        </a>
      </div>
    </section>
  );
};

export default Data;
