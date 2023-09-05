import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

import PlaceList from "../components/place-list";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/components/UI/LoadingSpinner";

const UserPlaces = (props) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const { isLoading, sendRequest } = useHttpClient();
  const userId = useParams().userId;

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const places = await sendRequest(
          `http://localhost:5000/api/places/user/${userId}`
        );
        setLoadedPlaces(places.places);
      } catch (error) {}
    };
    fetchPlaces();
  }, [sendRequest, userId]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevState) =>
      prevState.filter((place) => place.id !== deletedPlaceId)
    );
  };

  return (
    <>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />
      )}
    </>
  );
};

export default UserPlaces;
