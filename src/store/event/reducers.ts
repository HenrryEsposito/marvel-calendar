import { IAction } from "../";
import { IEventStore } from "./types";
import { actionType } from "./actions";

const INITIAL_STATE: IEventStore = {
  events: [],
};

export function eventReducer(
  state = INITIAL_STATE,
  action: IAction
): IEventStore {
  switch (action.type) {
    case actionType.SET_EVENTS:
      return { ...state, events: action.payload };

    default:
      return state;
  }
}
