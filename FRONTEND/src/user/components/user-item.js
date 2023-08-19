import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import Avatar from "../../shared/components/UI/Avatar";
import Card from "../../shared/components/UI/Card";
import styles from "./user-item.module.css";

const UserItem = (props) => {
  const { image, name, placeCount, id } = props;
  let places = placeCount === 1 ? "Place" : "Places";

  return (
    <li key={id} className={styles["user-item"]}>
      <Card className={styles["user-item__content"]}>
        <Link to={`/${id}/places`}>
          <div className={styles["user-item__image"]}>
            <Avatar image={image} alt={name} />
          </div>
          <div className={styles["user-item__info"]}>
            <h2>{name}</h2>
            <h3>
              {placeCount} {places}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
