"use client";

import { ArrowRight } from "@/assets/svg/ArrowRIght";
import { Star } from "@/assets/svg/Star";
import { Food } from "@/components/Food";
import { Grid, Stack, Typography } from "@mui/material";

import { useFetch } from "@/hooks/useFetch";
import { useState } from "react";
import { FoodsModal } from "./FoodsModal";

type FoodsProps = {
  type?: string;
  onClick: () => void;
};

export type FoodType = {
  _id: string;
  name: string;
  price: number;
  discount: string;
  image: any;
  categoryName: string;
  ingredient: string;
  saled: number;
  onSale: boolean;
};

export function Foods(props: FoodsProps) {
  const [selectedFood, setSelectedFood] = useState<FoodType | null>(null);

  const {
    datas: foodData,
    loading,
    error,
    refetch,
  } = useFetch<FoodType[]>("http://localhost:3008/foods");

  const { type, onClick } = props;
  const typeTranslate = () => {
    if (type == "Амттан") {
      return "Dessert";
    }
    if (type == "Үндсэн хоол") {
      return "Breakfast";
    }
    if (type == "Салад ба зууш") {
      return "Beverage";
    }
    if (type == "Хямдралтай") {
      return "onSale";
    }
  };

  const handleOpen = (food: FoodType) => {
    setSelectedFood(food);
  };

  const handleClose = () => {
    setSelectedFood(null);
  };

  return (
    <Stack gap={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          display="flex"
          gap={1}
          fontWeight={700}
          fontSize="22px"
          alignItems="center"
        >
          <Star />
          {type}
        </Typography>
        <Typography
          gap={1}
          display="flex"
          alignItems="center"
          fontWeight={400}
          fontSize="14px"
          color="primary"
          onClick={onClick}
        >
          Бүгдийг харах <ArrowRight />
        </Typography>
      </Stack>

      <Grid container spacing={2}>
        {foodData
          .filter((food) => food.categoryName === typeTranslate())
          .filter((food, index) => index < 4)
          .map((item) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12} key={item._id}>
                <Food {...item} onClick={handleOpen} />
              </Grid>
            );
          })}
      </Grid>

      <FoodsModal
        open={Boolean(selectedFood)}
        handleClose={() => setSelectedFood(null)}
        food={selectedFood}
      />
    </Stack>
  );
}
