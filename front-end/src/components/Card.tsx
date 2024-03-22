import { Close } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { CustomButton } from ".";
import { useData } from "./providers/DataProvider";
import { useEffect } from "react";

export type CardType = {
  name: String;
  price: number;
  image: String;
  ingredient: String;
  count: number;
  // onClick?: any;
};

export function Card({ image, name, price, ingredient, count }: CardType) {
  const { basketFood, setBasketFood, foodCount, setFoodCount } = useData();

  const changeFoodCount = (change: number) => {
    setFoodCount((prev) => {
      if (change < 0 && prev == 1) return prev;
      return change + prev;
    });
  };

  return (
    <Stack direction="row" gap={2}>
      <Stack width="50%" borderRadius={1} overflow="hidden" height={"172px"}>
        <img src={`${image}`} />
      </Stack>
      <Stack gap={1} justifyContent="space-between" width="50%">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <Typography fontSize="18px" fontWeight={600}>
              {name}
            </Typography>
            <Typography color="#18BA51" fontWeight={600} fontSize="18px">
              {price}₮
            </Typography>
          </Stack>

          <Stack
            onClick={() => {
              const newBasket = basketFood.filter(
                (element) => element.food.name !== name
              );
              setBasketFood(newBasket);
            }}
          >
            <Close />
          </Stack>
        </Stack>

        <Typography color="#767676" fontWeight={400} fontSize="16px">
          {ingredient}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <CustomButton
            label="-"
            variant="contained"
            onClick={() => changeFoodCount(-1)}
          />
          <Typography
            fontWeight={500}
            fontSize="16px"
            display="grid"
            style={{ placeContent: "center" }}
          >
            {count}
          </Typography>
          <CustomButton
            label="+"
            variant="contained"
            onClick={() => changeFoodCount(1)}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
