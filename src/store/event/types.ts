export interface IEventStore {
  events: IEventInfo[];
}

export interface IEventInfo {
  id: string;
  title: string;
  date: string;
  characters: [
    {
      id: string;
      name: string;
      thumb: string;
      year: number;
    }
  ];
}
