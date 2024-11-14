import React, { useRef, useState } from "react";
import "./App.css";
const App = () => {
  const [word, setWord] = useState("");
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const count = useRef(1);
  const handler = () => {
    inputRef.current?.focus();
    count.current++;
  };

  return (
    <>
      <input
        ref={inputRef}
        value={word}
        onChange={changeInputValue}
        placeholder="Напиши сюда что нибудь"
      />
      <button onClick={handler}>Focus the Input</button>
    </>
  );
};

export default App;
