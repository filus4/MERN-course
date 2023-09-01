import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import styles from "./place-form.module.css";
import ErrorModal from "../../shared/components/UI/ErrorModal";
import LoadingSpinner from "../../shared/components/UI/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";
import Card from "../../shared/components/UI/Card";

const UpdatePlace = () => {
  const { isLoading, error, clearError, sendRequest } = useHttpClient();
  const [loadedPlace, setLoadedPlace] = useState();
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const data = await sendRequest(
          `http://localhost:5000/api/places/${placeId}`
        );

        setLoadedPlace(data.place);
        setFormData(
          {
            title: {
              value: data.place.title,
              isValid: true,
            },
            description: {
              value: data.place.description,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchPlace();
  }, [placeId, sendRequest, setFormData]);

  const submitUpdateHandler = async (event) => {
    event.preventDefault();

    const editedPlace = {
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
    };

    try {
      await sendRequest(
        `http://localhost:5000/api/places/${placeId}`,
        "PATCH",
        JSON.stringify(editedPlace),
        { "Content-Type": "application/json" }
      );
      history.push(`/${authCtx.userId}/places`);
    } catch (error) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedPlace && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && loadedPlace && (
        <form onSubmit={submitUpdateHandler} className={styles["place-form"]}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={loadedPlace.title}
            initialValid={true}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (min. 5 charakters)."
            onInput={inputHandler}
            initialValue={loadedPlace.description}
            initialValid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE PLACE
          </Button>
        </form>
      )}
    </>
  );
};

export default UpdatePlace;
