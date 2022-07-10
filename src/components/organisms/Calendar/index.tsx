import React, { useCallback, useMemo, useState } from "react";
import { v4 as uniqueId } from "uuid";

import CalendarHeader from "../../atoms/CalendarHeader";
import InfiniteScroll from "../InfiniteScroll";
import DaySlot from "../DaySlot";

import useDateUtils from "../../../hooks/useDateUtils";

export default function Calendar() {
  const { getNearNextDaysByWeeks, getNextWeekByDay, getPreviousWeekByDay } =
    useDateUtils();

  const [mockedDays, setMockedDays] = useState<Date[]>(
    getNearNextDaysByWeeks(4)
  );

  const newMockedItemns = useMemo(() => {
    return mockedDays.map((mockedDay) => {
      return {
        key: uniqueId(),
        children: <DaySlot key={uniqueId()} dayNumber={mockedDay.getDate()} />,
      };
    });
  }, [mockedDays]);

  function handleReachBottom() {
    window.scrollBy({
      top: -10,
      left: 0,
    });

    setMockedDays((prev) => [
      ...prev.splice(7, prev.length),
      ...getNextWeekByDay(prev[prev.length - 1]),
    ]);
  }

  function handleReachBTop() {
    window.scrollBy({
      top: 10,
      left: 0,
    });

    setMockedDays((prev) => [
      ...getPreviousWeekByDay(prev[0]),
      ...prev.splice(0, prev.length - 7),
    ]);
  }

  return (
    <div className="calendar-base">
      <CalendarHeader />
      <InfiniteScroll
        items={newMockedItemns}
        onReachBottom={handleReachBottom}
        onReachTop={handleReachBTop}
      ></InfiniteScroll>
    </div>
  );
}
