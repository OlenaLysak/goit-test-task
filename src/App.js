import React, { useState, useEffect } from "react";
import axios from "axios";

//Style
import styles from "./App.module.css";

//Components
import ReposList from "./components/ReposList/ReposList";
import MyInput from "./components/MyInput";
import Pagination from "./components/Pagination";

//Utils
import { setUpUrl } from "./utils";

function App() {
  const [error, setError] = useState("");
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("react");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    //Set up url
    let url = setUpUrl(userInput, currentPage);
    axios
      .get(url)
      .then((data) => {
        setList(data?.data.items);
        setTotalPages(data?.data.total_count)
      })
      .catch((error) => {
        setError(error);
      });
  }, [userInput, currentPage]);

  if (error) return <h1>{error}</h1>;

  return (
    <div className={styles.App}>
      <MyInput setUserInput={setUserInput} />
      <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <ReposList list={list} />
      </Pagination>
    </div>
  );
}

export default App;
