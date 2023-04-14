import { useEffect, SetStateAction, useState } from "react";
import { DataTypes } from "../DataTypes";

type FormData = {
  setWordData: React.Dispatch<SetStateAction<DataTypes | undefined>>;
};

const Form = ({ setWordData }: FormData) => {
  const [empty, setEmpty] = useState<boolean>(false);

  const fetchData = async (search: string) => {
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;

      const response = await fetch(url, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setWordData(data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData("keyboard");
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;

    if (input.value) {
      fetchData(input.value);
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  };

  return (
    <form
      style={{ borderColor: empty ? "red" : "transparent" }}
      className="form"
      onSubmit={(e) => handleSearch(e)}
    >
      <input
        className="form__input"
        autoComplete="off"
        name="search"
        type="text"
      />
      {empty && <p className="form__error">Whoops, can&apos;t be empty</p>}
      <button
        className="form__button"
        type="submit"
        aria-label="search"
      ></button>
    </form>
  );
};

export default Form;
