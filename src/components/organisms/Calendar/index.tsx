import * as React from "react";
import { v4 as uniqueId } from "uuid";

import InfiniteScroll, { IIfinteItem } from "../InfiniteScroll";
import DaySlot from "../DaySlot";
import Card from "../../molecules/Card";

const mockItens: IIfinteItem[] = [
  {
    key: uniqueId(),
    children: <DaySlot dayNumber={1} />,
  },
  {
    key: uniqueId(),
    children: <DaySlot dayNumber={2} />,
  },
  {
    key: uniqueId(),
    children: <DaySlot dayNumber={3} />,
  },
  {
    key: uniqueId(),
    children: <DaySlot dayNumber={4} />,
  },
  {
    key: uniqueId(),
    children: <DaySlot dayNumber={5} />,
  },
  {
    key: uniqueId(),
    children: <DaySlot dayNumber={6} />,
  },
  {
    key: uniqueId(),
    children: (
      <DaySlot
        dayNumber={7}
        children={
          <Card
            title="Titulo"
            description="Lorem ipsum dolor sit amet, sed do eiusmod na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        }
      />
    ),
  },
  {
    key: uniqueId(),
    children: <DaySlot dayNumber={8} />,
  },
  {
    key: uniqueId(),
    children: <DaySlot dayNumber={9} />,
  },
  {
    key: uniqueId(),
    children: <DaySlot dayNumber={10} />,
  },
  {
    key: uniqueId(),
    children: <DaySlot dayNumber={11} />,
  },
  {
    key: uniqueId(),
    children: <DaySlot dayNumber={12} />,
  },
];

export default function Calendar() {
  return (
    <div className="calendar-base">
      <InfiniteScroll
        items={mockItens}
        onReachBottom={() => console.log("bottom")}
        onReachTop={() => console.log("top")}
      ></InfiniteScroll>
    </div>
  );
}
