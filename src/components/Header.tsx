import { useEffect, useState } from "react";
import Select from "react-select";
import Toggle from "react-toggle";
import "react-toggle/style.css";

type SelectTypes = {
  value: string;
  label: string;
}[];

type HeaderTypes = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ isChecked, setIsChecked }: HeaderTypes) => {
  const options: SelectTypes = [
    { value: "Sans Serif", label: "sans-serif" },
    { value: "Serif", label: "serif" },
    { value: "Mono", label: "mono" },
  ];

  const [selected, setSelected] = useState<any>("sans-serif");

  useEffect(() => {
    if (selected === "Sans Serif") {
      document.body.style.fontFamily = "inter";
    } else if (selected === "Serif") {
      document.body.style.fontFamily = "lora";
    } else if (selected === "Mono") {
      document.body.style.fontFamily = "inconsolata";
    }
  }, [selected]);

  return (
    <header className="header">
      <img
        className="header__logo"
        src="/assets/images/logo.svg"
        alt="Dictionary logo"
      />
      <Select
        className="header__select"
        value={selected}
        options={options}
        onChange={(option) => setSelected(option.value)}
      />
      <Toggle
        className="header__toggle"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <img
        className="header__mode-icon"
        src="/assets/images/icon-moon.svg"
        alt="Moon"
      />
    </header>
  );
};

export default Header;
