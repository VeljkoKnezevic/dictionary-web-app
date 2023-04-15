import "./styles/styles.scss";
import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import { DataTypes } from "./DataTypes";
import Data from "./components/Data";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [wordData, setWordData] = useState<DataTypes>();
  const [error, setError] = useState<boolean>(false);

  return (
    <div className={isChecked ? "dark" : "light"}>
      <Header error={error} isChecked={isChecked} setIsChecked={setIsChecked} />
      <main>
        <h1 className="visuallyhidden">Dictionary web app</h1>
        <Form error={error} setError={setError} setWordData={setWordData} />
        {wordData && <Data error={error} wordData={wordData} />}
      </main>
    </div>
  );
};

export default App;
