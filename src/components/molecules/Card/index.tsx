import React, { HTMLProps, PropsWithChildren } from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export interface ICard extends HTMLProps<HTMLDivElement>, PropsWithChildren {
  title: string;
  description: string;
}

export default function Card({ title, description, children }: ICard) {
  return (
    <MuiCard>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
}
