import { Dispatch, SetStateAction } from "react";

export default function useInputValidators() {
  function validateLength(
    value: string,
    setErr: Dispatch<SetStateAction<boolean>>,
    minLength: number
  ) {
    setErr(value.length <= minLength);
  }

  const validateEmail = (
    value: string,
    setErr: Dispatch<SetStateAction<boolean>>
  ) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    setErr(!value.match(regexEmail));
  };

  const validadePassword = (
    value: string,
    compareToValue: string,
    setErr: Dispatch<SetStateAction<boolean>>,
    minLength: number
  ) => {
    const compare = value === compareToValue;
    const bigEnough = value.length >= minLength;
    setErr(!(compare && bigEnough));
  };

  return {
    validateLength,
    validateEmail,
    validadePassword,
  };
}
