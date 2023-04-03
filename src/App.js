import React, { useState, useEffect } from "react";
import axios from "axios";

//Style
import styles from "./App.module.css";

//Components
import ReposList from "./components/ReposList/ReposList";
import MyInput from "./components/MyInput";

//Utils
import { setUpUrl } from "./utils";

function App() {
  const [error, setError] = useState("");
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("react");

  useEffect(() => {
    //Set up url
    let url = setUpUrl(userInput);
    axios
      .get(url)
      .then((data) => {
        setList(data?.data.items);
      })
      .catch((error) => {
        setError(error);
      });
  }, [userInput]);

  const handleInputChange = (value) => {
    const newVal = value.length ? value : "react";
    setUserInput(newVal);
  };

  if (error) return <h1>{error}</h1>;

  return (
    <div className={styles.App}>
      <MyInput handleInputChange={handleInputChange} />
      <ReposList list={list} />
    </div>
  );
}

export default App;
