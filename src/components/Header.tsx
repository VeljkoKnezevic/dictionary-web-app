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

  return (
    <header>
      <img src="/assets/images/logo.svg" alt="Dictionary logo" />
      <Select options={options} />
      <Toggle checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      <img src="/assets/images/icon-moon.svg" alt="Moon" />
    </header>
  );
};

export default Header;
