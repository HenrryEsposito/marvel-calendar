import * as React from "react";

import GridItem, { IGridItem } from "../../atoms/GridItem";
import DaySlotHeader from "../../atoms/DaySlotHeader";

import { Container } from "./styles";

export interface IDaySlot extends IGridItem {
  dayNumber: number;
}

export default function DaySlot(props: IDaySlot) {
  return (
    <Container>
      <DaySlotHeader dayNumber={props.dayNumber} />
      <GridItem {...props}>{props.children}</GridItem>
    </Container>
  );
}
