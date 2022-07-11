import { IUserInfo } from "./types";

export enum actionType {
  SET_CURRENT_USER = "SET_CURRENT_USER",
}

export const setCurrentUser = (value: IUserInfo) => ({
  type: actionType.SET_CURRENT_USER,
  payload: value,
});
