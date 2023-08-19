import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

import PlaceList from "../components/place-list";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Aincrad First Floor",
    description: "The first of 100 Aincrad's floors.",
    imageUrl:
      "https://static.wikia.nocookie.net/swordartonline/images/4/4c/SAO_environment.png/revision/latest/scale-to-width-down/1000?cb=20140308104916",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 3.080614,
      lng: -114.3843404,
    },
    creatorId: "u1",
  },
  {
    id: "p2",
    title: "Aincrad First Floor",
    description: "The first of 100 Aincrad's floors.",
    imageUrl:
      "https://static.wikia.nocookie.net/swordartonline/images/4/4c/SAO_environment.png/revision/latest?cb=20140308104916",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 3.080614,
      lng: -114.3843404,
    },
    creatorId: "u2",
  },
];

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const filteredPlaces = DUMMY_PLACES.filter(
    (place) => place.creatorId === userId
  );

  return (
    <>
      <PlaceList items={filteredPlaces} />
    </>
  );
};

export default UserPlaces;
