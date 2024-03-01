type FormType = {
  label: string;
  text: string;
};

import { Star } from "@/assets/svg/Star";
import { Stack, Typography } from "@mui/material";

export function Form(props: FormType) {
  const { label, text } = props;
  return (
    <Stack gap={3}>
      <Typography
        display="flex"
        fontWeight={700}
        fontSize="22px"
        alignItems="center"
        gap={0.5}
      >
        <Star /> {label}
      </Typography>
      <Typography fontWeight={400} fontSize="18px">
        {text}
      </Typography>
    </Stack>
  );
}
