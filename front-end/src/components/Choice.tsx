import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useData } from "./providers/DataProvider";

type Choices = {
  name: string;
  icon: ReactNode;
  onClick: any;
};

export function Choice(props: Choices) {
  const { name, icon, onClick } = props;
  const { basketFood } = useData();

  return (
    <>
      <Stack
        position="relative"
        style={{
          cursor: "pointer",
          width: "fit-content",
          height: "fit-content",
          padding: "8px 16px",
          gap: "8px",
        }}
        direction="row"
        onClick={onClick}
      >
        <Stack>
          {" "}
          {icon}
          <Stack
            bgcolor="red"
            width="18px"
            height="18px"
            sx={{
              position: "absolute",
              left: "30%",
              zIndex: "1",
              top: "10%",
              display: `${
                name === "сагс" && basketFood.length >= 1 ? "flex" : "none"
              }`,
              alignItems: "center",
              justifyContent: "center",
            }}
            color="#fff"
            borderRadius="50%"
          >
            {basketFood.length}
          </Stack>
        </Stack>

        <Typography fontSize="14px" fontWeight={700}>
          {name}
        </Typography>
      </Stack>

      {/* <Drawer /> */}
    </>
  );
}
