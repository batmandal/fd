"use client";

import { Stack } from "@mui/material";

import { LogInModal } from "@/components/LogIn";

export default function LogIn() {
  return (
    <Stack display="grid" style={{ placeContent: "center" }}>
      <LogInModal />
    </Stack>
  );
}
