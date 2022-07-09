import * as React from "react";

import Card, { ICard } from "../../molecules/Card";

export interface IEventCalendar extends ICard {
  day: number;
}

export default function EventCalendar(props: IEventCalendar) {
  return (
    <div>
      <Card {...props} />
    </div>
  );
}
