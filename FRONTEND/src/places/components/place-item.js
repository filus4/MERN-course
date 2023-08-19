import React, { useState } from "react";

import Card from "../../shared/components/UI/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UI/Modal";
import styles from "./place-item.module.css";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const { id, image, title, description, address, creatorId, coordinates } =
    props;

  const toggleMapHandler = () => {
    setShowMap((prevState) => !prevState);
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={toggleMapHandler}
        header={address}
        contentClass={styles["place-item__modal-content"]}
        footerClass={styles["place-item__modal-actions"]}
        footer={<Button onClick={toggleMapHandler}>CLOSE</Button>}
      >
        <div className={styles["map-container"]}>
          <h2>THE MAP</h2>
        </div>
      </Modal>
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
            <Button inverse onClick={toggleMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
