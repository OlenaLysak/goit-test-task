import React from "react";

//Styling
import styles from "./ReposList.module.css";

//Components
import ListItem from "./ListItem";

const ReposList = ({ list }) => {
  return (
    <div className={styles.list}>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ReposList;
