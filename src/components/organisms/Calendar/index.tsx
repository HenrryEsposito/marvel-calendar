import React, { useMemo } from "react";
import { v4 as uniqueId } from "uuid";

import CalendarHeader from "../../atoms/CalendarHeader";
import InfiniteScroll from "../InfiniteScroll";
import DaySlot from "../DaySlot";

import useDateUtils from "../../../hooks/useDateUtils";

export default function Calendar() {
  const { getNearNextDaysByWeeks } = useDateUtils();

  const mockedDays = useMemo(() => {
    return getNearNextDaysByWeeks(4);
  }, []);

  const newMockedItemns = useMemo(() => {
    return mockedDays.map((mockedDay) => {
      return {
        key: uniqueId(),
        children: <DaySlot key={uniqueId()} dayNumber={mockedDay.getDate()} />,
      };
    });
  }, [mockedDays]);

  return (
    <div className="calendar-base">
      <CalendarHeader />
      <InfiniteScroll
        items={newMockedItemns}
        onReachBottom={() => console.log("bottom")}
        onReachTop={() => console.log("top")}
      ></InfiniteScroll>
    </div>
  );
}
