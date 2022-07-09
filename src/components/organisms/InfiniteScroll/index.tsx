import React, { useEffect, ReactNode } from "react";

import Grid from "../../molecules/Grid";
import GridItem from "../../atoms/GridItem";

import { Container } from "./styles";
export interface IIfinteItem {
  key: any;
  children: ReactNode;
}

export interface IInfiniteScroll {
  items: IIfinteItem[];
  onReachTop: () => void;
  onReachBottom: () => void;
}

export default function InfiniteScroll({
  items,
  onReachTop,
  onReachBottom,
}: IInfiniteScroll) {
  function handleScroll(e: any) {
    if (e.target) {
      const bottom =
        e.target.children[0].scrollHeight - e.target.children[0].scrollTop ===
        e.target.children[0].clientHeight;

      const top = e.target.children[0].scrollTop === 0;

      if (bottom) {
        onReachBottom();
      }

      if (top) {
        onReachTop();
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Grid items={items} rowSize={7} />
    </Container>
  );
}
