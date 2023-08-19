import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

import PlaceList from "../components/place-list";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Aincrad First Floor",
    description: "The first of 100 Aincrad's floors.",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6ccf5748-0456-43d6-a1fb-1a059b88dbf0/d9amwdh-56de3a7f-4af4-46a8-89b9-3b6eb4a7b7fb.jpg/v1/fill/w_1280,h_936,q_75,strp/photomanipulation___sword_art_online___floor_1_by_dillios_d9amwdh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTM2IiwicGF0aCI6IlwvZlwvNmNjZjU3NDgtMDQ1Ni00M2Q2LWExZmItMWEwNTliODhkYmYwXC9kOWFtd2RoLTU2ZGUzYTdmLTRhZjQtNDZhOC04OWI5LTNiNmViNGE3YjdmYi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DaQNiqh4SC_Up3t6M3nQA0qSjQfDxyFUZea0HPJ4VJM",
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
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6ccf5748-0456-43d6-a1fb-1a059b88dbf0/d9amwdh-56de3a7f-4af4-46a8-89b9-3b6eb4a7b7fb.jpg/v1/fill/w_1280,h_936,q_75,strp/photomanipulation___sword_art_online___floor_1_by_dillios_d9amwdh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTM2IiwicGF0aCI6IlwvZlwvNmNjZjU3NDgtMDQ1Ni00M2Q2LWExZmItMWEwNTliODhkYmYwXC9kOWFtd2RoLTU2ZGUzYTdmLTRhZjQtNDZhOC04OWI5LTNiNmViNGE3YjdmYi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DaQNiqh4SC_Up3t6M3nQA0qSjQfDxyFUZea0HPJ4VJM",
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
