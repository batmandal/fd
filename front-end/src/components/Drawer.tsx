"use client";

import { Container, Drawer, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Choice, CustomButton } from ".";
import { ArrowBackIos, ShoppingBasketOutlined } from "@mui/icons-material";
import { Card } from "./Card";
import { useData } from "./providers/DataProvider";
import Link from "next/link";

export const Basket = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { basketFood, totalPrice, setTotalPrice } = useData();

  useEffect(() => {
    let total = 0;
    basketFood.forEach((food) => {
      total = total + food.food.price * food.quantity;
    });
    setTotalPrice(total);
  }, [basketFood]);

  return (
    <>
      <Choice
        name="сагс"
        icon={<ShoppingBasketOutlined />}
        onClick={() => setIsDrawerOpen(true)}
      />

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Stack
          direction="row"
          alignItems="center"
          padding="9px 11px"
          position="sticky"
          top={0}
          bgcolor="white"
          zIndex={1}
        >
          <Container sx={{ display: "flex" }}>
            <Stack
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <ArrowBackIos />
            </Stack>
            <Typography
              fontWeight={900}
              fontSize="20px"
              width="100%"
              display="grid"
              style={{ placeContent: "center" }}
            >
              Таны сагс
            </Typography>
          </Container>
        </Stack>
        <Container sx={{ width: "586px" }}>
          <Stack overflow="hidden" gap={2} py={3}>
            {basketFood.map((basketFood) => {
              return (
                <Card
                  name={basketFood.food.name}
                  image={basketFood.food.image}
                  price={basketFood.food.price}
                  ingredient={basketFood.food.ingredient}
                  count={basketFood.quantity}
                />
              );
            })}
          </Stack>
        </Container>

        <Stack
          direction="row"
          bottom="0px"
          width="100%"
          padding=" 49px 0px 69px 0px"
          gap="10px"
          boxShadow="0px 0px 8px 8px #BBBECD33"
          bgcolor="white"
          position="sticky"
        >
          <Container sx={{ display: "flex" }}>
            <Stack width="256px">
              <Typography color="#5E6166" fontWeight={400} fontSize="18px">
                Нийт төлөх дүн
              </Typography>
              <Typography color="#121316" fontWeight={700} fontSize="18px">
                {totalPrice}₮
              </Typography>
            </Stack>
            <Link href={"/foodOrder"}>
              <CustomButton
                label="Захиалах"
                variant="contained"
                sx={{ width: "256px", right: "0" }}
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
              />
            </Link>
          </Container>
        </Stack>
      </Drawer>
    </>
  );
};
