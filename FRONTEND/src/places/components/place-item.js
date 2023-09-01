import React, { useState, useContext } from "react";

import Card from "../../shared/components/UI/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UI/Modal";
import Map from "../../shared/components/UI/Map";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UI/ErrorModal";
import LoadingSpinner from "../../shared/components/UI/LoadingSpinner";
import styles from "./place-item.module.css";

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);
  const { isLoading, error, clearError, sendRequest } = useHttpClient();
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { id, image, title, description, address, coordinates, onDelete } =
    props;

  const toggleMapHandler = () => {
    setShowMap((prevState) => !prevState);
  };

  const toggleConfirmModal = () => {
    setShowConfirmModal((prevState) => !prevState);
  };

  const confirmDeleteHandler = async () => {
    toggleConfirmModal();
    try {
      await sendRequest(`http://localhost:5000/api/places/${id}`, "DELETE");
      onDelete(id);
    } catch (error) {}
  };
  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showMap}
        onCancel={toggleMapHandler}
        header={address}
        contentClass={styles["place-item__modal-content"]}
        footerClass={styles["place-item__modal-actions"]}
        footer={<Button onClick={toggleMapHandler}>CLOSE</Button>}
      >
        <div className={styles["map-container"]}>
          <Map center={coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={toggleConfirmModal}
        header="Are you sure?"
        footerClass={styles["place-item__modal-actions"]}
        footer={
          <>
            <Button onClick={toggleConfirmModal} inverse>
              CANCEL
            </Button>
            <Button onClick={confirmDeleteHandler} danger>
              DELETE
            </Button>
          </>
        }
      >
        <p>
          Do you want to proceed and delete this place? This action can not be
          undone.
        </p>
      </Modal>
      <li className={styles["place-item"]}>
        <Card className={styles["place-item__content"]}>
          {isLoading && (
            <div className="center">
              <LoadingSpinner asOverlay />
            </div>
          )}
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
            {auth.isLoggedIn && (
              <>
                <Button to={`/places/${id}`}>EDIT</Button>
                <Button onClick={toggleConfirmModal} danger>
                  DELETE
                </Button>
              </>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
