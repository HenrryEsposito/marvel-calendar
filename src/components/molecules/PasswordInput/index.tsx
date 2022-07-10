import React, {
  useState,
  forwardRef,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";
import {
  IconButton,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  FormControl,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export interface IPasswordInput {
  showPassword?: boolean;
  setShowPassword?: Dispatch<SetStateAction<boolean>>;
  label?: string;
}

function PasswordInput(props: IPasswordInput, ref: any) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleShowPassword() {
    if (
      props.setShowPassword !== undefined &&
      props.showPassword !== undefined
    ) {
      return props.setShowPassword((prev) => !prev);
    }

    return setShowPassword((prev) => !prev);
  }

  const showPasswordMemo = useMemo(() => {
    if (props.showPassword !== undefined) {
      return props.showPassword;
    }
    return showPassword;
  }, [props.showPassword, showPassword]);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="password-input">
          {props.label ? props.label : "Senha"}
        </InputLabel>
        <OutlinedInput
          id="password-input"
          inputRef={ref}
          type={showPasswordMemo ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPasswordMemo ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={props.label ? props.label : "Senha"}
          placeholder="******"
        />
      </FormControl>
    </>
  );
}

export default forwardRef(PasswordInput);
