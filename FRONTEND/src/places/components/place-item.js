import React from "react";

import Card from "../../shared/components/UI/Card";
import Button from "../../shared/components/FormElements/Button";
import styles from "./place-item.module.css";

const PlaceItem = (props) => {
  const { id, image, title, description, address, creatorId, coordinates } =
    props;
  return (
    <li className={styles["place-item"]}>
      <Card className={styles["place-item__content"]}>
        <div className={styles["place-item__image"]}>
          <img src={image} alt={title} />
        </div>
        <div className={styles["place-item__info"]}>
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className={styles["place-item__actions"]}>
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
