import React, { HTMLProps, ReactNode } from "react";

import { Container } from "./styles";

export interface IGridItem extends HTMLProps<HTMLDivElement> {
  key: string;
  children?: ReactNode;
}

export default function GridItem({ children, id, className }: IGridItem) {
  return (
    <Container id={id} className={className}>
      {children}
    </Container>
  );
}
