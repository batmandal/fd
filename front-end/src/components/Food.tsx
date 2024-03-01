import { Stack, Typography } from "@mui/material";
import { FoodType } from "./Foods";
import { useState } from "react";
import { useData } from "./providers/DataProvider";

type FoodProps = {
  onClick: (food: FoodType) => void;
} & FoodType;

export function Food(props: FoodProps) {
  const { onClick, ...food } = props;

  const handleClick = () => {
    onClick(food);
  };

  let saledPrice = food.price - (food.price * food.saled) / 100;

  return (
    <Stack onClick={handleClick} sx={{ cursor: "pointer" }} gap="14px">
      <Stack
        borderRadius={2}
        overflow="hidden"
        height="186px"
        width="100%"
        position="relative"
      >
        <img
          src={food.image}
          alt=""
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        {food.saled && (
          <Stack
            direction="row"
            position="absolute"
            bgcolor="#18BA51"
            border="2px solid #fff"
            px={2}
            py={"4px"}
            borderRadius="16px"
            fontWeight={600}
            fontSize="18px"
            color="#fff"
            right={0}
            margin={2}
          >
            {food.saled}%
          </Stack>
        )}
      </Stack>
      <Stack>
        <Typography fontWeight={600} fontSize="18px">
          {food.name}
        </Typography>
        <Stack direction="row" gap={2}>
          <Typography fontWeight={600} fontSize="18px" color="primary">
            {food.saled ? saledPrice : food.price}₮
          </Typography>
          {food.saled && (
            <Stack
              // direction="row"
              fontWeight={400}
              fontSize="18px"
              sx={{
                textDecorationLine: "line-through",
              }}
            >
              {food.price}₮
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
