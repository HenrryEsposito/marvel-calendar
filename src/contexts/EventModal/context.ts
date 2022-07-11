import { createContext } from "react";
import { IEventModalContext } from "./types";

export const EventModalContext = createContext<IEventModalContext>(
  {} as IEventModalContext
);
