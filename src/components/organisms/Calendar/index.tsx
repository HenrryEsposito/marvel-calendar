import React, { ReactNode, useMemo, useState } from "react";
import { v4 as uniqueId } from "uuid";

import CalendarHeader from "../../atoms/CalendarHeader";
import InfiniteScroll, { IIfinteItem } from "../InfiniteScroll";
import DaySlot from "../DaySlot";
import EventCard from "../EventCard";
import CreateEventModal from "../CreateEventModal";

import useDateUtils from "../../../hooks/useDateUtils";
import { useEventModalContext } from "../../../contexts/EventModal/useBoard";

export default function Calendar() {
  const { getNearNextDaysByWeeks, getNextWeekByDay, getPreviousWeekByDay } =
    useDateUtils();
  const { showModal, setShowModal } = useEventModalContext();

  const [mockedDays, setMockedDays] = useState<Date[]>(
    getNearNextDaysByWeeks(4)
  );

  const newMockedItems = useMemo<IIfinteItem[]>(() => {
    return mockedDays.map((mockedDay) => {
      return {
        key: uniqueId(),
        children: (
          <DaySlot key={uniqueId()} date={mockedDay}>
            {addRandonEvent()}
          </DaySlot>
        ),
      };
    });
  }, [mockedDays]);

  function handleReachBottom() {
    window.scrollBy({
      top: -15,
      left: 0,
      behavior: "smooth",
    });

    setMockedDays((prev) => [
      ...prev.splice(7, prev.length),
      ...getNextWeekByDay(prev[prev.length - 1]),
    ]);
  }

  function handleReachTop() {
    window.scrollBy({
      top: 15,
      left: 0,
      behavior: "smooth",
    });

    setMockedDays((prev) => [
      ...getPreviousWeekByDay(prev[0]),
      ...prev.splice(0, prev.length - 7),
    ]);
  }

  function addRandonEvent(): ReactNode {
    if (Math.round(Math.random() * 10) < 4) {
      return (
        <EventCard
          key={uniqueId()}
          title="Teste"
          description="om mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina..."
        ></EventCard>
      );
    }
    return <></>;
  }

  function handleCloseEventModal() {
    setShowModal(false);
  }

  return (
    <div className="calendar-base">
      <CalendarHeader />
      <InfiniteScroll
        items={newMockedItems}
        onReachBottom={handleReachBottom}
        onReachTop={handleReachTop}
      ></InfiniteScroll>
      <CreateEventModal open={showModal} onClose={handleCloseEventModal} />
    </div>
  );
}
