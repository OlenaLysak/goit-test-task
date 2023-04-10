import React, { useState, useEffect } from "react";
import axios from "axios";

//Style
import styles from "./App.module.css";

//Components
import ReposList from "./features/ReposList/ReposList";
import MyInput from "./features/MyInput";
import Pagination from "./features/Pagination";

//Utils
import { setUpUrl } from "./utils";

//Redux
import { useSelector } from "react-redux";

function App() {
  const [error, setError] = useState("");
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("react");
  const [totalPages, setTotalPages] = useState(0);

  const currentPage = useSelector((state) => state.pagination.page);

  useEffect(() => {
    //Set up url
    let url = setUpUrl(userInput, currentPage);
    axios
      .get(url)
      .then((data) => {
        setList(data?.data.items);
        setTotalPages(data?.data.total_count);
      })
      .catch((error) => {
        setError(error);
      });
  }, [userInput, currentPage]);

  if (error) return <h1>{error}</h1>;

  return (
    <div className={styles.App}>
      <MyInput setUserInput={setUserInput} />
      <Pagination totalPages={totalPages}>
        <ReposList list={list} />
      </Pagination>
    </div>
  );
}

export default App;
