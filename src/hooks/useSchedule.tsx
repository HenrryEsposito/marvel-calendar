import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import { IEventInfo } from "../store/event/types";

import { rootStore } from "../store";

import useDateUtils from "./useDateUtils";

export interface IScreenDaysSlot {
  screenDay: Date;
  eventsOfScreenDay: IEventInfo[];
}

export default function useSchedule() {
  const [screenDays, setScreenDays] = useState<Date[]>([]);
  const [screenDaysSlots, setScreenDaysSlots] = useState<IScreenDaysSlot[]>([]);

  const eventStore = useSelector((state: rootStore) => state.eventStore);

  const {
    getPreviousWeekByDay,
    getNextWeekByDay,
    getNearNextDaysByWeeks,
    compareDateWithoutTime,
    cloneDate,
  } = useDateUtils();
  useEffect(() => {
    setScreenDays(getNearNextDaysByWeeks(4));
  }, []);

  useEffect(() => {
    setScreenDaysSlots(getEventsOfScreenDays(screenDays));
  }, [screenDays]);

  function handleReachBottom() {
    window.scrollBy({
      top: -15,
      left: 0,
      behavior: "smooth",
    });

    setScreenDays((prev) => {
      return [...prev.slice(-28), ...getNextWeekByDay(prev[prev.length - 1])];
    });
  }

  function handleReachTop() {
    window.scrollBy({
      top: 15,
      left: 0,
      behavior: "smooth",
    });

    setScreenDays((prev) => [
      ...getPreviousWeekByDay(prev[0]),
      ...prev.slice(0, 28),
    ]);
  }

  function getEventsOfScreenDays(thisScreenDays: Date[]): IScreenDaysSlot[] {
    const toReturn = thisScreenDays.map((thisScreenDay) => {
      const eventsOfScreenDay = eventStore.events.filter((storeEvent) => {
        return compareDateWithoutTime(
          cloneDate(thisScreenDay),
          cloneDate(parseInt(storeEvent.date))
        );
      });

      return {
        screenDay: thisScreenDay,
        eventsOfScreenDay: eventsOfScreenDay,
      };
    });
    return toReturn;
  }

  return {
    screenDays,
    screenDaysSlots,
    handleReachTop,
    handleReachBottom,
    setScreenDays,
    setScreenDaysSlots,
    getEventsOfScreenDays,
  };
}
