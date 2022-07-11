export interface IEventStore {
  events: IEventInfo[];
}

export interface ICharacterInfo {
  id: string;
  name: string;
  thumbSrc?: string;
}

export interface IEventInfo {
  id: string;
  title: string;
  description: string;
  date: string;
  characters: ICharacterInfo[];
}
