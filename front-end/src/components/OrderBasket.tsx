"use client";

import { Stack, Typography } from "@mui/material";

import { CustomButton } from ".";
import { useData } from "./providers/DataProvider";
import { Card } from "./Card";

export function OrderBasket() {
  const { basketFood, totalPrice } = useData();

  return (
    <Stack
      width="432px"
      borderRadius={2}
      padding={3}
      sx={{
        boxShadow: "4px 4px 10px 8px #F6F6F6",
      }}
      height="612px"
    >
      <Stack
        overflow="hidden"
        sx={{
          overflow: "scroll",
        }}
        borderRadius={1}
        gap={2}
        py={2}
      >
        {basketFood.map((cartFood) => {
          return (
            <Card
              name={cartFood.food.name}
              image={cartFood.food.image}
              price={cartFood.food.price}
              ingredient={cartFood.food.ingredient}
              count={cartFood.quantity}
            />
          );
        })}
      </Stack>

      <Stack
        direction="row"
        sx={{ position: "sticky", bottom: "0", left: "0" }}
        justifyContent="space-between"
        py={1}
      >
        <Stack>
          <Typography fontWeight={400} fontSize="18px" color="#5E6166">
            Нийт төлөх дүн
          </Typography>
          <Typography fontSize={"18px"} color="#121316" fontWeight={700}>
            {totalPrice}₮
          </Typography>
        </Stack>
        <CustomButton label="Захиалах" variant="contained" disabled={true} />
      </Stack>
    </Stack>
  );
}
