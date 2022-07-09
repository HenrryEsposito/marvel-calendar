import React, { ReactNode, useMemo } from "react";
import MuiGrid from "@mui/material/Grid";

import { IGridItem } from "../../atoms/GridItem";

export interface IGrid {
  items: IGridItem[];
  rowSize: number;
}

export default function Grid({ items, rowSize }: IGrid) {
  const columnRatio = useMemo(() => {
    return 12 / rowSize;
  }, [rowSize]);

  return (
    <MuiGrid sx={{ flexGrow: 1 }} container>
      {items.map((item) => {
        return (
          <MuiGrid item xs={columnRatio} key={item.key}>
            {item.children}
          </MuiGrid>
        );
      })}
    </MuiGrid>
  );
}
