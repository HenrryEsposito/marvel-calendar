import * as React from "react";
import { v4 as uniqueId } from "uuid";

import Card, { ICard } from "../../molecules/Card";
import List from "../../molecules/List";

import useDraggable from "../../../hooks/useDraggable";

import { Container } from "./styles";

import { ICharacterInfo } from "../../../store/event/types";
export interface IEventCard extends ICard {
  day?: number;
  eventId: string;
  chars: ICharacterInfo[];
}

export default function EventCard(props: IEventCard) {
  const { dragStart, dragOver, dragEnd } = useDraggable();

  return (
    <Container
      id={uniqueId()}
      draggable
      onDragStart={(e) => {
        dragStart(e, props.eventId);
      }}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      <Card {...props}>
        <List items={props.chars} />
      </Card>
    </Container>
  );
}
