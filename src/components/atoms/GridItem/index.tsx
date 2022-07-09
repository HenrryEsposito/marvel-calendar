import React, { ReactNode } from "react";

import { Container } from "./styles";

export interface IGridItem {
  children?: ReactNode;
}

export default function GridItem({ children }: IGridItem) {
  return children ? <Container>{children}</Container> : null;
}
