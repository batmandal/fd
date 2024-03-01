import { Stack, Typography } from "@mui/material";

type OrderIntroProps = {
  title: string;
  label: string;
  text: string;
};

export function OrderIntro(props: OrderIntroProps) {
  const { title, label, text } = props;
  return (
    <Stack
      padding="16px 24px"
      direction="row"
      gap={2}
      alignItems="center"
      width="fit-Content"
    >
      <Stack
        width={48}
        height={48}
        borderRadius="50%"
        border="solid 1px #0468C8"
        display="grid"
        sx={{ placeContent: "center" }}
      >
        <Stack
          sx={{ background: "#0468C8" }}
          width={24}
          height={24}
          borderRadius="50%"
        ></Stack>
      </Stack>
      <Stack>
        <Typography fontWeight={400} fontSize="14px" color="#8B8E95">
          {title}
        </Typography>
        <Typography fontWeight={400} fontSize="20px">
          {label}
        </Typography>
        <Typography fontWeight={400} fontSize="16px" color="#0468C8">
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
}
