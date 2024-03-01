"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import {
  Stack,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";

type TxProps = {
  text?: String;
};

export const CustomInput = (props: TextFieldProps & TxProps) => {
  const {
    type = "text",
    label,
    size = "medium",
    text,
    onClick,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Stack gap={0.5}>
      <Typography fontSize={14}>{label}</Typography>

      <TextField
        {...rest}
        sx={{
          background: `${type === "search" ? "white" : "#ECEDF0"}`,
        }}
        type={type === "password" && showPassword ? "text" : type}
        inputProps={{
          style: { padding: size === "small" ? "8px 16px" : "14px 16px" },
        }}
        InputProps={{
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Typography
        color={"text.secondary"}
        textAlign="end"
        fontWeight={400}
        fontSize="14px"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        {text}
      </Typography>
    </Stack>
  );
};
