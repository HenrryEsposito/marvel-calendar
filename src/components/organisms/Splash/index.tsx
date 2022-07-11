import React, { useRef } from "react";
import { Button } from "@mui/material";

import { IModalHandles } from "../../organisms/Modal";
import LoginModal from "../../organisms/LoginModal";
import RegisterModal from "../../organisms/RegisterModal";
import CreateEventModal from "../CreateEventModal";

import { Container } from "./styles";

export default function Splash() {
  const loginModalRef = useRef<IModalHandles>(null);
  const registerModalRef = useRef<IModalHandles>(null);

  function openModal(refToOpen: any) {
    refToOpen.current?.handleOpenModal();
  }

  function handleOpenLoginModal() {
    openModal(loginModalRef);
  }

  function handleOpenRegisterModal() {
    openModal(registerModalRef);
  }

  return (
    <Container>
      <Button variant="outlined" size="large" onClick={handleOpenLoginModal}>
        event
      </Button>
      <Button variant="outlined" size="large" onClick={handleOpenRegisterModal}>
        Registrar
      </Button>
      <CreateEventModal ref={loginModalRef} />
      <RegisterModal ref={registerModalRef} />
    </Container>
  );
}
