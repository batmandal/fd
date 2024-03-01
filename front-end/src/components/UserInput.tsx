import { CreateOutlined } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
import { ReactNode } from "react";

type UserType = {
  label: string;
  icon: ReactNode;
  text?: string;
};

export function UserInput(props: UserType) {
  const { label, icon, text } = props;
  return (
    <Stack
      width="392px"
      bgcolor="#F6F6F6"
      // bgcolor="red"
      direction="row"
      justifyContent="space-between"
      py={1}
      px="20px"
      alignItems="center"
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Stack
          width="48px"
          height="48px"
          borderRadius="50%"
          border="solid 1px #EEEFF2"
          display="grid"
          sx={{ placeContent: "center", background: "white" }}
        >
          {icon}
        </Stack>
        <Stack>
          <Typography fontWeight="400" fontSize="12px" color="#888A99">
            {label}
          </Typography>
          <Typography fontWeight={400} fontSize="16px">
            {text}
          </Typography>
        </Stack>
      </Stack>
      <Stack color="#18BA51">
        <CreateOutlined />
      </Stack>
    </Stack>
  );
}

type PropsAction = {
  title: string;
  icon2: ReactNode;
  onClick?: any;
};
export function Action(props: PropsAction) {
  const { title, icon2, onClick } = props;
  return (
    <Stack
      direction="row"
      width="392px"
      py={1}
      px="20px"
      alignItems="center"
      gap={1}
      onClick={onClick}
      sx={{ cursor: "pointer" }}
    >
      <Stack
        width="48px"
        height="48px"
        borderRadius="50%"
        border="solid 1px #EEEFF2"
        display="grid"
        sx={{ placeContent: "center", background: "white" }}
      >
        {icon2}
      </Stack>
      <Typography fontWeight={400} fontSize="16px">
        {title}
      </Typography>
    </Stack>
  );
}
