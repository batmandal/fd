import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
type FastProps = { icon: ReactNode; title: ReactNode; text: ReactNode };

export function FastDelivery(params: FastProps) {
  const { icon, title, text } = params;
  return (
    <Stack
      padding={2}
      border="1px #D6D8DB solid"
      borderRadius="16px"
      sx={{ boxShadow: "10px 10px 10px #F5F5F5" }}
    >
      <Stack>{icon}</Stack>
      <Typography fontWeight={700} fontSize="18px">
        {title}
      </Typography>
      <Typography fontWeight={400} fontSize={"14px"}>
        {text}
      </Typography>
    </Stack>
  );
}
