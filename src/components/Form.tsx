import { useEffect, SetStateAction, useState } from "react";
import { DataTypes } from "../DataTypes";

type FormData = {
  setWordData: React.Dispatch<SetStateAction<DataTypes | undefined>>;
  setFetchError: React.Dispatch<SetStateAction<Error | null>>;
};

enum ErrorMessage {
  checking = "Checking...",
  empty = "",
  message = "Whoops, can't be empty...",
}

const Form = ({ setWordData, setFetchError }: FormData) => {
  const [empty, setEmpty] = useState<string>(ErrorMessage.checking);

  const fetchData = async (search: string) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    try {
      const response = await fetch(url, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
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

    if (!input.value) {
      setEmpty(ErrorMessage.message);
    } else {
      setEmpty(ErrorMessage.empty);
    }

    if (empty === ErrorMessage.empty) {
      fetchData(input.value);
    }
  };
  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input name="search" type="text" />
      {empty === ErrorMessage.message && <p>{empty}</p>}
      <button type="submit">
        <img src="/assets/images/icon-search.svg" alt="Search" />
      </button>
    </form>
  );
};

export default Form;
