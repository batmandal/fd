"use client";
import { Stack, Typography } from "@mui/material";
import { CustomButton, CustomInput } from ".";
import { useState } from "react";
import { ForgotPassProps } from "./ForgotPass1";

export function ForgotPass3(props: ForgotPassProps) {
  return (
    <Stack py={8}>
      <Stack
        gap={6}
        padding={4}
        style={{
          width: "448px",
          borderRadius: "16px",
        }}
      >
        <Typography fontWeight={700} fontSize={"28px"} textAlign="center">
          Нууц үг сэргээх
        </Typography>
        <Stack gap={3}>
          <Stack gap={2}>
            <CustomInput
              label="Нууц үг "
              // value={emailValue}
              placeholder="Шинэ нууц үг"
              // onChange={handleChange}
              type="password"
            />
          </Stack>
          <Stack gap={2}>
            <CustomInput
              label="Шинэ нууц үг давтах  "
              // value={emailValue}
              placeholder="Шинэ нууц үг давтах "
              // onChange={handleChange}
              type="password"
            />
          </Stack>
        </Stack>

        <Stack gap={6}>
          <CustomButton
            variant="contained"
            label="Үргэлжлүүлэх"
            // disabled={!emailValue}
            sx={{
              width: "384px",
              height: "48px",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
