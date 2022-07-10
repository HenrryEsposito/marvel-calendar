import * as React from "react";
import { v4 as uniqueId } from "uuid";

import Card, { ICard } from "../../molecules/Card";

import useDraggable from "../../../hooks/useDraggable";

export interface IEventCard extends ICard {
  day?: number;
}

export default function EventCard(props: IEventCard) {
  const { dragStart, dragOver, dragEnd } = useDraggable();

  return (
    <div
      id={uniqueId()}
      draggable
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      <Card {...props} />
    </div>
  );
}
