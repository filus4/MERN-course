import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import styles from "./place-form.module.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Aincrad First Floor",
    description: "The first of 100 Aincrad's floors.",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6ccf5748-0456-43d6-a1fb-1a059b88dbf0/d9amwdh-56de3a7f-4af4-46a8-89b9-3b6eb4a7b7fb.jpg/v1/fill/w_1280,h_936,q_75,strp/photomanipulation___sword_art_online___floor_1_by_dillios_d9amwdh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTM2IiwicGF0aCI6IlwvZlwvNmNjZjU3NDgtMDQ1Ni00M2Q2LWExZmItMWEwNTliODhkYmYwXC9kOWFtd2RoLTU2ZGUzYTdmLTRhZjQtNDZhOC04OWI5LTNiNmViNGE3YjdmYi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DaQNiqh4SC_Up3t6M3nQA0qSjQfDxyFUZea0HPJ4VJM",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.748817,
      lng: -73.985428,
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
      lat: 40.748817,
      lng: -73.985428,
    },
    creatorId: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className={styles["place-form"]}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        initialValue={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 charakters)."
        onInput={() => {}}
        initialValue={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
