import { Stack } from "@mui/material";
import { CSSProperties, Dispatch, SetStateAction, useState } from "react";

type ToggleProps = {
  onClick: any;
  onToggle: boolean;
};

export function Toggle(props: ToggleProps) {
  const { onClick, onToggle } = props;

  return (
    <Stack
      sx={{
        background: `${onToggle === true ? "#18BA51" : "#8B8E95"}`,
        justifyContent: `${onToggle === true ? "flex-end" : "flex-start"}`,
        cursor: "pointer",
      }}
      width="28px"
      height="16px"
      borderRadius="20px"
      padding="2px"
      direction="row"
      onClick={onClick}
    >
      <Stack
        borderRadius="50%"
        bgcolor="white"
        width="12px"
        height="100%"
      ></Stack>
    </Stack>
  );
}
