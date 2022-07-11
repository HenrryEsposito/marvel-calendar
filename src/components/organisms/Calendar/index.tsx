import React from "react";
import { v4 as uniqueId } from "uuid";

import CalendarHeader from "../../atoms/CalendarHeader";
import InfiniteScroll from "../InfiniteScroll";
import DaySlot from "../DaySlot";
import EventCard from "../EventCard";
import CreateEventModal from "../CreateEventModal";

import useSchedule from "../../../hooks/useSchedule";

import { IScreenDaysSlot } from "../../../hooks/useSchedule";

import { useEventModalContext } from "../../../contexts/EventModal/useBoard";

export default function Calendar() {
  const { handleReachTop, handleReachBottom, screenDaysSlots } = useSchedule();
  const { showModal, setShowModal } = useEventModalContext();

  function handleCloseEventModal() {
    setShowModal(false);
  }

  return (
    <div className="calendar-base">
      <CalendarHeader />
      <InfiniteScroll
        items={screenDaysSlots.map((screenDaySlot: IScreenDaysSlot) => {
          return {
            key: uniqueId(),
            children: (
              <DaySlot key={uniqueId()} date={screenDaySlot.screenDay}>
                <>
                  {screenDaySlot.eventsOfScreenDay.map((event) => {
                    return (
                      <EventCard
                        key={uniqueId()}
                        title={event?.title || ""}
                        description={event?.description || ""}
                      />
                    );
                  })}
                </>
              </DaySlot>
            ),
          };
        })}
        onReachBottom={handleReachBottom}
        onReachTop={handleReachTop}
      ></InfiniteScroll>
      <CreateEventModal open={showModal} onClose={handleCloseEventModal} />
    </div>
  );
}
