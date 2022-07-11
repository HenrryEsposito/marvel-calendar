import { IEventInfo } from "./types";

export enum actionType {
  SET_EVENTS = "SET_EVENTS",
}

export const setEvents = (value: IEventInfo[]) => ({
  type: actionType.SET_EVENTS,
  payload: value,
});
