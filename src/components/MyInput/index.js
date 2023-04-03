import React from "react";

//Components
import OutlinedInput from "@mui/material/OutlinedInput";

//Style
import styles from "./MyInput.module.css";

const MyInput = ({ handleInputChange }) => {
  return (
    <div className={styles.inputWrapper}>
      {" "}
      <OutlinedInput
        fullWidth
        placeholder="Search"
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default MyInput;
