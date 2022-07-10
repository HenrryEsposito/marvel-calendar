import * as React from "react";
import { v4 as uniqueId } from "uuid";

import GridItem, { IGridItem } from "../../atoms/GridItem";
import DaySlotHeader from "../../atoms/DaySlotHeader";

import { Container } from "./styles";

import useDraggable from "../../../hooks/useDraggable";

export interface IDaySlot extends IGridItem {
  dayNumber: number;
}

export default function DaySlot(props: IDaySlot) {
  const nodeId = uniqueId();

  const { drop, dragOver } = useDraggable();

  return (
    <Container
      onDrop={(e) => {
        drop(e, nodeId);
      }}
      onDragOver={dragOver}
    >
      <DaySlotHeader dayNumber={props.dayNumber} />
      <GridItem id={nodeId} key={nodeId}>
        {props.children}
      </GridItem>
    </Container>
  );
}
