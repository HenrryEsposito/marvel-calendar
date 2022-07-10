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
import HowToRegIcon from "@mui/icons-material/HowToReg";

import Modal, { IModalHandles } from "../Modal";
import PasswordInput from "../../molecules/PasswordInput";

import { Container } from "./styles";

export interface IRegisterModal {}

const RegisterModal: React.ForwardRefRenderFunction<
  IModalHandles,
  IRegisterModal
> = (_, forwardedRef) => {
  const loginInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Modal ref={forwardedRef}>
      <Container>
        <DialogTitle id="alert-dialog-title">Faça seu registro</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container spacing={2} p={1}>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="email-input">E-mail</InputLabel>
                  <OutlinedInput
                    inputRef={loginInputRef}
                    label="E-mail"
                    placeholder="tonystark@starkco.com"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="name-input">Nome</InputLabel>
                  <OutlinedInput
                    id="name-input"
                    inputRef={nameInputRef}
                    label="E-mail"
                    placeholder="Tony"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <PasswordInput
                  ref={passwordInputRef}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              </Grid>
              <Grid item xs={6}>
                <PasswordInput
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  ref={confirmPasswordInputRef}
                  label="Confirme a senha"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<HowToRegIcon />}
                  onClick={() => {
                    console.log(
                      "register login",
                      loginInputRef.current?.value,
                      nameInputRef.current?.value,
                      passwordInputRef.current?.value,
                      confirmPasswordInputRef.current?.value
                    );
                  }}
                >
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Container>
    </Modal>
  );
};

export default React.forwardRef(RegisterModal);
