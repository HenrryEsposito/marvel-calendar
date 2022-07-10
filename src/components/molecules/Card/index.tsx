import React, { ReactNode, HTMLProps } from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

export interface ICard extends HTMLProps<HTMLDivElement> {
  title: string;
  description: string;
  childrenActions?: ReactNode;
}

export default function Card({ title, description, childrenActions }: ICard) {
  return (
    <MuiCard>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {childrenActions && <CardActions>{childrenActions}</CardActions>}
    </MuiCard>
  );
}
