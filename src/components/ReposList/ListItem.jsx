import React from "react";

//Styling
import styles from "./ListItem.module.css";

//Utils
import { capitalizeFirstLetter } from "../../utils";

//Icons
import StarIcon from "@mui/icons-material/Star";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const ListItem = ({ item }) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.leftCol}>
        <div className={styles.imageCover}>
          <img
            alt={item.name}
            src={item.owner.avatar_url}
            className={styles.image}
          />
        </div>
        <div className={styles.description}>
          <div className={styles.title}>{capitalizeFirstLetter(item.name)}</div>
          <div>Author: {item.owner.login}</div>
          <div>Language: {item.language}</div>
          <div>Description: {item.description}</div>
        </div>
      </div>
      <div className={styles.rightCol}>
        <div className={styles.specification}>
          <StarIcon style={{ color: "#FFC22B" }} />
          <div className={styles.specDescr}>{item.stargazers_count} stars</div>
        </div>
        <div className={styles.specification}>
          <PermIdentityIcon color="action" />
          <div className={styles.specDescr}>{item.watchers_count} watchers</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
