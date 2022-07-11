import React, { PropsWithChildren } from "react";
import { v4 as uniqueId } from "uuid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton } from "@mui/material";

import GridItem, { IGridItem } from "../../atoms/GridItem";
import DaySlotHeader from "../../atoms/DaySlotHeader";

import { Container } from "./styles";

import useDraggable from "../../../hooks/useDraggable";
import { useEventModalContext } from "../../../contexts/EventModal/useBoard";

export interface IDaySlot extends IGridItem, PropsWithChildren {
  date: Date;
}

export default function DaySlot({ date, children }: IDaySlot) {
  const { drop, dragOver } = useDraggable();
  const { setShowModal, setCurrentDate } = useEventModalContext();

  const nodeId = uniqueId();

  function handleOpenCreateEventModal() {
    setCurrentDate(date.getTime().toString());
    setShowModal(true);
  }

  return (
    <Container
      onDrop={(e) => {
        drop(e, nodeId);
      }}
      onDragOver={dragOver}
    >
      <DaySlotHeader dayNumber={date} />
      <GridItem id={nodeId} className="grid-item" key={nodeId}>
        {children}
      </GridItem>
      <IconButton onClick={handleOpenCreateEventModal}>
        <AddCircleOutlineIcon />
      </IconButton>
    </Container>
  );
}
