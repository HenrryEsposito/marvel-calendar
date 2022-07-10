import { appStep } from "./types";

export enum actionType {
  SET_CURRENT_STEP = "SET_CURRENT_STEP",
}

export const setCurrentStep = (value: appStep) => ({
  type: actionType.SET_CURRENT_STEP,
  payload: value,
});
