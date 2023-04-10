import { useEffect, SetStateAction } from "react";

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

type FormData = {
  setWordData: React.Dispatch<SetStateAction<DataTypes>>;
  setFetchError: React.Dispatch<SetStateAction<Error>>;
};

const Form = ({ setWordData, setFetchError }: FormData) => {
  const fetchData = async (search: string) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
      );
      const data = await response.json();

      setWordData(data);
    } catch (err) {
      setFetchError(err as Error);
    }
  };

  useEffect(() => {
    fetchData("keyboard");
  }, []);
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;

    fetchData(input.value);
  };
  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input name="search" type="text" />
      <button type="submit">
        <img src="/assets/images/icon-search.svg" alt="Search" />
      </button>
    </form>
  );
};

export default Form;
