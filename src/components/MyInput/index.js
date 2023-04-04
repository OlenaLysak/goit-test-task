import React from "react";

//Components
import OutlinedInput from "@mui/material/OutlinedInput";

//Style
import styles from "./MyInput.module.css";

//Utils
import { debounce } from "../../utils";

const MyInput = ({ setUserInput }) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    const newVal = e.target.value.length ? e.target.value : "react";
    setUserInput(newVal);
  };

  const debouncedHandler = debounce(handleInputChange, 300);

  return (
    <div className={styles.inputWrapper}>
      {" "}
      <OutlinedInput
        fullWidth
        placeholder="Search"
        onChange={(e) => debouncedHandler(e)}
      />
    </div>
  );
};

export default MyInput;
