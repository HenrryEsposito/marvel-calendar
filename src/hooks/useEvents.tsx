import { useSelector, useDispatch } from "react-redux";

import { rootStore } from "../store/";

import useLocalStorage from "./useLocalStorage";
import { IEventInfo } from "../store/event/types";
import { setEvents } from "../store/event/actions";

export interface IUserEventsData {
  userId: string;
  events: IEventInfo[];
}

export default function useEvents() {
  const { getItem, setItem } = useLocalStorage();

  const dispatch = useDispatch();
  const eventStore = useSelector((state: rootStore) => state.eventStore);
  const currentUserId = useSelector(
    (state: rootStore) => state.userStore.currentUserInfo.id
  );

  function createNewUserEventsEntry(userId: string) {
    const userEventsDataList: IUserEventsData[] = getItem("EventsData", []);

    userEventsDataList.push({ userId: userId, events: [] });

    setItem("EventsData", userEventsDataList);
  }

  function loadEventsDataToStore(userId: string) {
    const thisUserEvents = getEvents(userId);

    if (!!thisUserEvents) dispatch(setEvents(thisUserEvents));
  }

  function getEvents(userId: string): IEventInfo[] {
    const userEventsDataList: IUserEventsData[] = getItem("EventsData", []);

    const thisUserEvents: IEventInfo[] | undefined = userEventsDataList.find(
      (data) => data.userId === userId
    )?.events;

    if (!!thisUserEvents) return thisUserEvents;
    return [];
  }

  function patchUserEventList(newEventList: IEventInfo[]) {
    const userEventsDataList: IUserEventsData[] = getItem("EventsData", []);

    const thisUserEventData = userEventsDataList.find(
      (data) => data.userId === currentUserId
    );

    if (thisUserEventData) thisUserEventData.events = newEventList;

    setItem("EventsData", userEventsDataList);

    dispatch(setEvents(newEventList));
  }

  function createNewEvent(newEvent: IEventInfo) {
    console.log("createNewEvent", newEvent, "store", eventStore.events);
    const newEventList: IEventInfo[] = [...eventStore.events, newEvent];
    patchUserEventList(newEventList);
  }

  return {
    createNewUserEventsEntry,
    loadEventsDataToStore,
    getEvents,
    createNewEvent,
    patchUserEventList,
  };
}
