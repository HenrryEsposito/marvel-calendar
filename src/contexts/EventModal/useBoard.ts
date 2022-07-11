import { useContext } from "react";
import { EventModalContext } from "./context";

export function useEventModalContext() {
  const context = useContext(EventModalContext);

  if (!context) {
    throw new Error(
      "The EventModalContext it's mean to be used by its childrens components only."
    );
  }

  return context;
}
