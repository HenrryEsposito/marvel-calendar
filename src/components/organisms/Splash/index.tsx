import React, { useRef } from "react";
import { Button } from "@mui/material";

import { IModalHandles } from "../../organisms/Modal";
import LoginModal from "../../organisms/LoginModal";
import RegisterModal from "../../organisms/RegisterModal";

import { Container } from "./styles";

export default function Splash() {
  const loginModalRef = useRef<IModalHandles>(null);
  const registerModalRef = useRef<IModalHandles>(null);

  function openModal(refToOpen: any) {
    refToOpen.current?.handleOpenModal();
  }

  return (
    <Container>
      <Button
        variant="outlined"
        size="large"
        onClick={() => {
          openModal(loginModalRef);
        }}
      >
        Entrar
      </Button>
      <Button
        variant="outlined"
        size="large"
        onClick={() => {
          openModal(registerModalRef);
        }}
      >
        Registrar
      </Button>
      <LoginModal ref={loginModalRef} />
      <RegisterModal ref={registerModalRef} />
    </Container>
  );
}
