import { IAction } from "../";
import { IUserStore } from "./types";
import { actionType } from "./actions";

const INITIAL_STATE: IUserStore = {
  currentUserInfo: { id: "", login: "", name: "", token: "" },
};

export function userReducer(state = INITIAL_STATE, action: IAction) {
  switch (action.type) {
    case actionType.SET_CURRENT_USER:
      return { ...state, currentUserInfo: action.payload };

    default:
      return state;
  }
}
