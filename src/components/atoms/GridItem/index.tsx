import React, { HTMLProps, PropsWithChildren } from "react";

import { Container } from "./styles";

export interface IGridItem
  extends HTMLProps<HTMLDivElement>,
    PropsWithChildren {
  key: string;
}

export default function GridItem({ children, id, className }: IGridItem) {
  return (
    <Container id={id} className={className}>
      {children}
    </Container>
  );
}
