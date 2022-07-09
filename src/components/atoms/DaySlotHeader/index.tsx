import * as React from "react";

import { Container } from "./styles";

export interface IDaySlotHeader {
  dayNumber: number;
}

export default function DaySlotHeader({ dayNumber }: IDaySlotHeader) {
  return <Container>{dayNumber}</Container>;
}
