"use client";
import { Book } from "@/assets/svg/Book";

import { Soup } from "@/assets/svg/Soup";
import { Time } from "@/assets/svg/Time";
import { FastDelivery } from "@/components/FastDelivery";

import { Foods } from "@/components/Foods";
import { Stack, Grid, Container } from "@mui/material";
import { useRouter } from "next/navigation";

const fastDeliveries = [
  {
    icon: <Book />,
    title: "Хүргэлтийн төлөв хянах",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <Time />,
    title: "Шуурхай хүргэлт",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <Soup />,
    title: "Эрүүл, баталгаат орц",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <Book />,
    title: "Хоолны өргөн сонголт",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
];

const foodChoice = [
  { type: "Хямдралтай" },
  { type: "Үндсэн хоол" },
  { type: "Салад ба зууш" },
  { type: "Амттан" },
];

export default function HomePage() {
  const router = useRouter();
  return (
    <Stack style={{ position: "relative" }}>
      <Stack
        bgcolor={"#18BA51"}
        py="170px"
        style={{
          backgroundImage: "url(/Food.png)",
          position: "relative",
        }}
        width="100%"
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack maxWidth="384px">
            <img src="FD.png" alt="" />
          </Stack>
          <Stack position="relative">
            <img src="BigMeal.png" alt="" />
            <img
              src="SmallMeal.png"
              alt=""
              style={{
                zIndex: "20",
                position: "absolute",
                right: "0",
                bottom: "0",
              }}
            />
          </Stack>
        </Container>
      </Stack>
      <Container maxWidth="lg">
        {" "}
        <Stack direction="row" py="122px" justifyContent="space-between">
          <Grid container spacing={4}>
            {fastDeliveries.map((item) => {
              return (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <FastDelivery
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Stack>
        <Stack gap={10} paddingBottom="82px">
          {foodChoice.map((item) => (
            <Foods
              type={item.type}
              onClick={() => {
                router.push("/menu-page");
              }}
            />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
}
