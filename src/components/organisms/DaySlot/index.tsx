import React, { useRef } from "react";
import { v4 as uniqueId } from "uuid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton } from "@mui/material";

import { IModalHandles } from "../Modal";
import GridItem, { IGridItem } from "../../atoms/GridItem";
import DaySlotHeader from "../../atoms/DaySlotHeader";
import CreateEventModal from "../CreateEventModal";

import { Container } from "./styles";

import useDraggable from "../../../hooks/useDraggable";

export interface IDaySlot extends IGridItem {
  dayNumber: number;
}

export default function DaySlot(props: IDaySlot) {
  const addEventModalRef = useRef<IModalHandles>(null);

  const nodeId = uniqueId();

  const { drop, dragOver } = useDraggable();

  function handleOpenCreateEventModal() {
    addEventModalRef.current?.handleOpenModal();
  }

  return (
    <Container
      onDrop={(e) => {
        drop(e, nodeId);
      }}
      onDragOver={dragOver}
    >
      <DaySlotHeader dayNumber={props.dayNumber} />
      <GridItem id={nodeId} className="grid-item" key={nodeId}>
        {props.children}
      </GridItem>
      <IconButton onClick={handleOpenCreateEventModal}>
        <AddCircleOutlineIcon />
      </IconButton>
      <CreateEventModal ref={addEventModalRef} />
    </Container>
  );
}
