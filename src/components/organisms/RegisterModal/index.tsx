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

import useInputValidators from "../../../hooks/useInputValidators";
import useAuth from "../../../hooks/useAuth";

export interface IRegisterModal {}

const RegisterModal: React.ForwardRefRenderFunction<
  IModalHandles,
  IRegisterModal
> = (_, forwardedRef) => {
  const loginInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const { validateLength, validateEmail, validadePassword } =
    useInputValidators();

  const { register } = useAuth();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [errValidadeEmail, setErrValidadeEmail] = useState(true);
  const [errValidadeName, setErrValidadeName] = useState(true);
  const [errValidadePassword, setErrValidadePassword] = useState(true);

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
                    onChange={(e) => {
                      validateEmail(e.target.value, setErrValidadeEmail);
                    }}
                    error={!!errValidadeEmail}
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
                    onChange={(e) => {
                      validateLength(e.target.value, setErrValidadeName, 3);
                    }}
                    error={!!errValidadeName}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <PasswordInput
                  ref={passwordInputRef}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  onChange={(e) => {
                    validadePassword(
                      e.target.value,
                      confirmPasswordInputRef.current?.value || "",
                      setErrValidadePassword,
                      6
                    );
                  }}
                  error={!!errValidadePassword}
                />
              </Grid>
              <Grid item xs={6}>
                <PasswordInput
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  ref={confirmPasswordInputRef}
                  label="Confirme a senha"
                  error={!!errValidadePassword}
                  onChange={(e) => {
                    validadePassword(
                      e.target.value,
                      passwordInputRef.current?.value || "",
                      setErrValidadePassword,
                      6
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<HowToRegIcon />}
                  onClick={() => {
                    register(
                      nameInputRef.current?.value || "",
                      loginInputRef.current?.value || "",
                      passwordInputRef.current?.value || ""
                    );
                  }}
                  disabled={
                    errValidadeEmail || errValidadeName || errValidadePassword
                  }
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
