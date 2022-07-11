import React, { useState } from "react";
import { EventModalContext } from "./context";

export function EventModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<string>("");

  return (
    <EventModalContext.Provider
      value={{ showModal, setShowModal, currentDate, setCurrentDate }}
    >
      {children}
    </EventModalContext.Provider>
  );
}
