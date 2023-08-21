import React, { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";
import styles from "./Input.module.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const {
    id,
    label,
    element,
    placeholder,
    type,
    rows,
    errorText,
    validators,
    onInput,
    initialValue,
    valid,
  } = props;

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isTouched: false,
    isValid: valid || false,
  });

  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid);
  }, [id, inputState.value, inputState.isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value, validators });
  };

  const touchHandler = (event) => {
    dispatch({ type: "TOUCH" });
  };

  const formElement =
    element === "input" ? (
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );
  return (
    <div
      className={`${styles["form-control"]} ${
        !inputState.isValid &&
        inputState.isTouched &&
        styles["form-control--invalid"]
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {formElement}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
