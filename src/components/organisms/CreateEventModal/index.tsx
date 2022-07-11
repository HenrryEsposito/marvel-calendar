import React, { useRef, useState } from "react";
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
import { v4 as uniqueId } from "uuid";

import useMarvelAPI from "../../../hooks/useMarvelAPI";
import useEvents from "../../../hooks/useEvents";
import { useEventModalContext } from "../../../contexts/EventModal/useBoard";

import Modal, { IModalHandles, IModal } from "../Modal";
import List from "../../molecules/List";

import { ICharacterInfo } from "../../../store/event/types";

export interface ICreateEventModal extends IModal {}

const CreateEventModal: React.ForwardRefRenderFunction<
  IModalHandles,
  ICreateEventModal
> = (props, forwardedRef) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const charInputRef = useRef<HTMLInputElement>(null);

  const { getCharacter } = useMarvelAPI();
  const { createNewEvent } = useEvents();
  const { currentDate, setShowModal } = useEventModalContext();

  const [charList, setCharList] = useState<ICharacterInfo[]>([]);

  async function addCharacter() {
    const charToSearch = charInputRef.current?.value;

    let char: ICharacterInfo | null = null;
    if (!!charToSearch)
      char = (await getCharacter(charToSearch)) as ICharacterInfo;

    if (!char)
      return alert(
        "Nenhum personagem encontrado com esse nome! (Os nomes devem ser em inglês!)"
      );

    setCharList((prev) => [...prev, char as ICharacterInfo]);
  }

  function validateEventForm(): boolean {
    if (
      (titleInputRef.current?.value.length || "") &&
      (descriptionInputRef.current?.value.length || "") &&
      charList.length
    )
      return true;

    return false;
  }

  function handleSubmit() {
    if (validateEventForm()) {
      setShowModal(false);
      createNewEvent({
        id: uniqueId(),
        date: currentDate,
        title: titleInputRef.current?.value || "",
        description: descriptionInputRef.current?.value || "",
        characters: charList,
      });

      return window.location.reload();
    }

    alert("Todos os campos são obrigatórios!");
  }

  return (
    <Modal ref={forwardedRef} {...props}>
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
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="description-input">Descrição</InputLabel>
                <OutlinedInput
                  id="description-input"
                  inputRef={descriptionInputRef}
                  label="Descrição"
                  rows={5}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl>
                <InputLabel htmlFor="char-input">Personagem</InputLabel>
                <OutlinedInput
                  id="search-character-input"
                  inputRef={charInputRef}
                  label="Personagem"
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <Button variant="outlined" size="large" onClick={addCharacter}>
                Adicionar Personagem
              </Button>
            </Grid>

            <Grid item xs={12}>
              <List items={charList}></List>
            </Grid>

            <Grid item xs={12}>
              <Button variant="outlined" size="large" onClick={handleSubmit}>
                Criar Evento
              </Button>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Modal>
  );
};

export default React.forwardRef(CreateEventModal);
