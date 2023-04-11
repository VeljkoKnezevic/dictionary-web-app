export type DataTypes = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
  sourceUrls: string[];
}[];

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
};

export type Definition = {
  definition: string;
  example: string;
  synonims: string[];
  antonyms: string[];
};

export type Phonetic = {
  text: string;
  audio?: string;
};
