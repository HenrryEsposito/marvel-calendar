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
import { InternalStandardProps } from "@mui/material";
import { InputBaseProps } from "@mui/material";

export interface IPasswordInput extends InternalStandardProps<InputBaseProps> {
  showPassword?: boolean;
  setShowPassword?: Dispatch<SetStateAction<boolean>>;
  label?: string;
}

function PasswordInput(
  { showPassword, setShowPassword, label, ...rest }: IPasswordInput,
  ref: any
) {
  const [innerShowPassword, setInnerShowPassword] = useState<boolean>(false);

  function handleShowPassword() {
    if (setShowPassword !== undefined && showPassword !== undefined) {
      return setShowPassword((prev) => !prev);
    }

    return setInnerShowPassword((prev) => !prev);
  }

  const showPasswordMemo = useMemo(() => {
    if (showPassword !== undefined) {
      return showPassword;
    }
    return innerShowPassword;
  }, [showPassword, innerShowPassword]);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="password-input">
          {label ? label : "Senha"}
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
          label={label ? label : "Senha"}
          placeholder="******"
          {...rest}
        />
      </FormControl>
    </>
  );
}

export default forwardRef(PasswordInput);
