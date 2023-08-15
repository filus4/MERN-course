import React from "react";

import styles from "./user-item.module.css";

const UserItem = (props) => {
  const { image, name, placeCount, id } = props;
  let places = placeCount === 1 ? "Place" : "Places";

  return (
    <li key={id} className={styles["user-item"]}>
      <div className={styles["user-item__content"]}>
        <div className={styles["user-item__image"]}>
          <img src={image} alt={name} />
        </div>
        <div className={styles["user-item__info"]}>
          <h2>{name}</h2>
          <h3>
            {placeCount} {places}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
