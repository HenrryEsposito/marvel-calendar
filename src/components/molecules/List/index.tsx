import * as React from "react";
import {
  List as MuiList,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

import { Container, muiListStyle } from "./styles";

export interface IItem {
  name: string;
  thumbSrc?: string;
}

export interface IList {
  items: IItem[];
}

export default function List({ items }: IList) {
  return (
    <Container>
      <MuiList sx={muiListStyle}>
        {items.map((item) => {
          return (
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {item.thumbSrc ? (
                    <img src={item.thumbSrc} alt="marvel character"></img>
                  ) : (
                    <ImageIcon />
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
            </ListItem>
          );
        })}
      </MuiList>
    </Container>
  );
}
