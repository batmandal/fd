"use client";
import { Stack, TextField, Typography } from "@mui/material";

import { Action, UserInput } from "@/components/UserInput";
import {
  ForwardToInboxOutlined,
  LogoutOutlined,
  PersonOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";
import Page from "@/components/upload/UploadImage";
import { useData } from "@/components/providers/DataProvider";

export default function User() {
  const { logout, userData } = useAuth();

  const { imageUrl } = useData();
  // console.log(imageUrl, "image url");

  const router = useRouter();

  return (
    <Stack gap={5} alignItems="center" margin={8}>
      <Stack position="relative">
        <Stack
          width="120px"
          height="120px"
          borderRadius="50%"
          overflow="hidden"
          bgcolor={"red"}
          // display="grid"
          // sx={{ placeContent: "center" }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={`${userData?.image}`}
          />
        </Stack>
        <Stack
          color="#18BA51"
          border="solid 1px #D6D8DB"
          borderRadius="50%"
          width="34px"
          height="34px"
          display="grid"
          sx={{
            placeContent: "center",
            background: "white",
            cursor: "pointer",
          }}
          position="absolute"
          right={0}
          bottom={0}
          onClick={() => {
            return <TextField type="file"></TextField>;
          }}
        >
          <Page />
        </Stack>
      </Stack>
      <Typography fontWeight={700} fontSize="28px">
        {userData?.name}
      </Typography>
      <Stack gap={2}>
        <UserInput
          label="Таны нэр"
          icon={<PersonOutlined />}
          text={userData?.name}
        />
        <UserInput
          label="Утасны дугаар"
          icon={<PhoneOutlined />}
          text={userData?.password}
        />
        <UserInput
          label="Имэйл хаяг"
          icon={<PersonOutlined />}
          text={userData?.email}
        />
        <Action title="Захиалгын түүх" icon2={<ForwardToInboxOutlined />} />
        <Action
          title="Гарах"
          icon2={<LogoutOutlined />}
          onClick={() => {
            logout(), router.push("/home-page");
          }}
        />
      </Stack>
    </Stack>
  );
}
