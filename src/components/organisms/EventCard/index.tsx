import * as React from "react";

import Card, { ICard } from "../../molecules/Card";

export interface IEventCard extends ICard {
  day?: number;
}

export default function EventCard(props: IEventCard) {
  return (
    <div>
      <Card {...props} />
    </div>
  );
}
