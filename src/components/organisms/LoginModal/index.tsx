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

import Modal, { IModalHandles } from "../Modal";
import PasswordInput from "../../molecules/PasswordInput";

import { Container } from "./styles";

import useAuth from "../../../hooks/useAuth";

export interface ILoginModal {}

const LoginModal: React.ForwardRefRenderFunction<IModalHandles, ILoginModal> = (
  _,
  forwardedRef
) => {
  const loginInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const { logIn } = useAuth();

  return (
    <Modal ref={forwardedRef}>
      <Container>
        <DialogTitle id="alert-dialog-title">
          Entre com a sua conta.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container spacing={2} p={1}>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="email-input">E-mail</InputLabel>
                  <OutlinedInput
                    id="email-input"
                    inputRef={loginInputRef}
                    label="E-mail"
                    placeholder="tonystark@starkco.com"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <PasswordInput ref={passwordInputRef} />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<LoginIcon />}
                  onClick={() => {
                    logIn(
                      loginInputRef.current?.value || "",
                      passwordInputRef.current?.value || ""
                    );
                  }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Container>
    </Modal>
  );
};

export default React.forwardRef(LoginModal);
