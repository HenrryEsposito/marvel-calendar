import React, { ReactNode } from "react";

import { Container } from "./styles";

export interface IGridItem {
  key: string;
  children?: ReactNode;
}

export default function GridItem({ children }: IGridItem) {
  return <Container>{children}</Container>;
}
