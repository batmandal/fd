import { Stack } from "@mui/material";
import { useState } from "react";

type ToggleProps = {
  style?: any;
};

export function Toggle(props: ToggleProps) {
  const { style } = props;

  const [onToggle, setOnToggle] = useState(false);

  const active = () => {
    if (onToggle === true) {
      return setOnToggle(false);
    }
    if (onToggle === false) {
      return setOnToggle(true);
    }
  };

  return (
    <Stack
      sx={{
        background: `${onToggle === true ? "#18BA51" : "#8B8E95"}`,
        justifyContent: `${onToggle === true ? "flex-end" : "flex-start"}`,
        cursor: "pointer",
      }}
      style={style}
      width="28px"
      height="16px"
      borderRadius="20px"
      justifyContent="center"
      padding="2px"
      direction="row"
      onClick={active}
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
