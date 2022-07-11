import * as React from "react";

export interface IEventModalContext {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentDate: string;
  setCurrentDate: React.Dispatch<React.SetStateAction<string>>;
}
