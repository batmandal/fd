"use client";

import { Food } from "@/components/Food";
import { FoodType } from "@/components/Foods";
import { FoodsModal } from "@/components/FoodsModal";
import { useFetch } from "@/hooks/useFetch";
import { Container, Grid, Stack } from "@mui/material";
import { useState } from "react";
import { CategoryStyleType } from "../admin/page";

export default function MenuPage() {
  const { datas: foodData } = useFetch<FoodType[]>(
    "http://localhost:3008/foods"
  );

  const {
    datas: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useFetch<CategoryStyleType[]>("http://localhost:3008/categories");

  const [menu, setMenu] = useState<string>("Breakfast");
  const [activeTab, setActiveTab] = useState<any>("Breakfast");
  const [selectedFood, setSelectedFood] = useState<FoodType | null>(null);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {categoryData.map((item, index) => {
          return (
            <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
              <Stack
                borderRadius="8px"
                border="1px solid #D6D8DB"
                fontSize="18x"
                fontWeight="600"
                py={1}
                width="100%"
                alignItems="center"
                sx={{ cursor: "pointer" }}
                bgcolor={`${
                  activeTab === item.categoryName ? "#18BA51" : null
                }`}
                color={`${activeTab === item.categoryName ? "#fff" : null}`}
                onClick={() => {
                  setMenu(item.categoryName), setActiveTab(item.categoryName);
                }}
              >
                {item.categoryName}
              </Stack>
            </Grid>
          );
        })}
      </Grid>

      <Stack>
        <Grid
          container
          spacing={2}
          sx={{ marginBottom: "105px", marginTop: "54px" }}
        >
          {foodData
            .filter((f) => f.categoryName === menu)
            .map((item, index) => {
              return (
                <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                  <Food
                    {...item}
                    onClick={() => {
                      setSelectedFood(item);
                    }}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Stack>
      <FoodsModal
        open={Boolean(selectedFood)}
        handleClose={() => setSelectedFood(null)}
        food={selectedFood}
      />
    </Container>
  );
}
