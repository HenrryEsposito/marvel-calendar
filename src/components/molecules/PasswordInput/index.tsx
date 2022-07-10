import React, { useState, forwardRef } from "react";
import {
  IconButton,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  FormControl,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export interface IPasswordInput {}

function PasswordInput(_: IPasswordInput, ref: any) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="password-input">Senha</InputLabel>
        <OutlinedInput
          id="password-input"
          inputRef={ref}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Senha"
          placeholder="******"
        />
      </FormControl>
    </>
  );
}

export default forwardRef(PasswordInput);
