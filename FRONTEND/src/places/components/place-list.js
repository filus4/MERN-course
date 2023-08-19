import React from "react";

import Card from "../../shared/components/UI/Card";
import PlaceItem from "./place-item";
import styles from "./place-list.module.css";

const PlaceList = (props) => {
  const { items } = props;
  if (items.length === 0) {
    return (
      <div className={`${styles["place-list"]} center`}>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  const mappedPlaces = items.map((place) => (
    <PlaceItem
      key={place.id}
      id={place.id}
      image={place.imageUrl}
      title={place.title}
      description={place.description}
      address={place.address}
      creatorId={place.creator}
      coordinates={place.location}
    />
  ));
  return <ul className={styles["place-list"]}>{mappedPlaces}</ul>;
};

export default PlaceList;
