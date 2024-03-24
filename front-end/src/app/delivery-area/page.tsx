"use client";

import { Container, Stack, Typography } from "@mui/material";
// import Image from "next/image";
// import { GoogleMapsEmbed } from "@next/third-parties/google";
// import { useState } from "react";
import { Star } from "@/assets/svg/Star";

const address = [
  "Нархан хотхон",
  "26-р байр",
  "45-р байр",
  "3-р байр",
  "Хоймор хотхон ",
];

type AddressType = {
  label: string;
};

export default function DeliveryArea() {
  return (
    <Container maxWidth="lg">
      <Stack gap="22px" py={6}>
        {/* <APIProvider apiKey="AIzaSyBAdenS5wzqAaY7Tnxlig46zOi01XCI4cE">
          <Stack height={"80vh"}>
            <Map
              zoom={9}
              center={{
                lat: 47.9221,
                lng: 106.9155,
              }}
            ></Map>
            <GoogleMapsEmbed
              apiKey="AIzaSyBAdenS5wzqAaY7Tnxlig46zOi01XCI4cE"
              height={"80vh"}
              width={"100%"}
              mode="place"
              q="Brooklyn+Bridge,New+York,NY"
            ></GoogleMapsEmbed>
          </Stack>
        </APIProvider> */}
        <Typography
          fontWeight={700}
          fontSize="22px"
          display="flex"
          alignItems="center"
          gap={1}
        >
          <Star /> Хүргэлтийн бүс дэх хаягууд
        </Typography>
        <Stack direction="row" gap={3}>
          <Address label="А бүс" />
          <Address label="Б бүс" />
        </Stack>
      </Stack>
    </Container>
  );
}

function Address(props: AddressType) {
  const { label } = props;
  return (
    <Stack
      width="100%"
      padding={3}
      borderRadius="16px"
      boxShadow="10px 10px 10px 10px #f5f5f5"
    >
      <Stack
        width="100%"
        py={2}
        fontWeight={590}
        fontSize={"20px"}
        borderBottom="1px solid #18BA51"
      >
        {label}
      </Stack>
      <Stack
        direction="row"
        gap={2}
        width="100%"
        marginTop={2}
        justifyContent="space-between"
      >
        <Stack fontWeight={400} fontSize="16px" gap={2} alignItems="">
          {address.map((item) => {
            return <Stack key={item}>{item}</Stack>;
          })}
        </Stack>
        <Stack fontWeight={400} fontSize="16px" gap={2}>
          {address.map((item) => {
            return <Stack key={item}>{item}</Stack>;
          })}
        </Stack>
      </Stack>
    </Stack>
  );
}
