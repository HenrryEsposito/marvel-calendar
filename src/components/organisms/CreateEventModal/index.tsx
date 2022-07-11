import React, { useRef } from "react";
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  OutlinedInput,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { v4 as uniqueId } from "uuid";

import useEvents from "../../../hooks/useEvents";

import Modal, { IModalHandles } from "../Modal";

import { Container } from "./styles";

export interface ICreateEventModal {}

const CreateEventModal: React.ForwardRefRenderFunction<
  IModalHandles,
  ICreateEventModal
> = (_, forwardedRef) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const { createNewEvent } = useEvents();

  return (
    <Modal ref={forwardedRef}>
      <Container>
        <DialogTitle id="alert-dialog-title">Criar um evento.</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid container spacing={2} p={1}>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="title-input">Título</InputLabel>
                  <OutlinedInput
                    id="title-input"
                    inputRef={titleInputRef}
                    label="Título"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="description-input">Descrição</InputLabel>
                  <OutlinedInput
                    id="description-input"
                    inputRef={descriptionInputRef}
                    label="Descrição"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="date-input">
                    Data de Lançamento
                  </InputLabel>
                  <OutlinedInput
                    id="date-input"
                    inputRef={dateInputRef}
                    label="Data de Lançamento"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<LoginIcon />}
                  onClick={() => {
                    createNewEvent({
                      id: uniqueId(),
                      title: titleInputRef.current?.value || "",
                      description: descriptionInputRef.current?.value || "",
                      date: dateInputRef.current?.value || "",
                      characters: [],
                    });
                  }}
                >
                  Criar
                </Button>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Container>
    </Modal>
  );
};

export default React.forwardRef(CreateEventModal);
