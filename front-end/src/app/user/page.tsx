"use client";
import { Modal, Stack, TextField, Typography } from "@mui/material";
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
import { useState } from "react";

export default function User() {
  const { logout, userData } = useAuth();

  const { imageUrl } = useData();

  return (
    <Stack gap={5} alignItems="center" margin={8}>
      <Stack position="relative">
        <Stack
          width="120px"
          height="120px"
          borderRadius="50%"
          overflow="hidden"
          bgcolor={"red"}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            // src={`${userData?.image}`}
            src={`${imageUrl}`}
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
            return <TextField type="file" />;
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
        {/* <Action
          title="Гарах"
          icon2={<LogoutOutlined />}
          onClick={() => {
            logout(), router.push("/home-page");
          }}
        /> */}
        <ExitModal />
      </Stack>
    </Stack>
  );
}
export const ExitModal = () => {
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();
  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  return (
    <>
      <Stack
        onClick={() => {
          setOpen(true);
        }}
      >
        <Action title="Гарах" icon2={<LogoutOutlined />} />
      </Stack>
      <Modal open={open} onClose={handleClose}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          height={"100vh"}
          onClick={handleClose}
        >
          <Stack
            bgcolor={"white"}
            width={"25%"}
            height={"25%"}
            borderRadius={"20px"}
            overflow={"hidden"}
          >
            <Typography
              width={"100%"}
              height={"100%"}
              display={"flex"}
              sx={{ textAlign: "center" }}
              alignItems={"center"}
              fontWeight={600}
              fontSize={"20px"}
            >
              Та системээс гарахдаа итгэлтэй байна уу?
            </Typography>
            <Stack direction={"row"} height={"30%"}>
              <Typography
                width={"50%"}
                display={"grid"}
                sx={{ placeContent: "center" }}
                fontWeight={600}
                fontSize={"20px"}
                color={"white"}
                bgcolor={"#18BA51"}
                onClick={() => {
                  logout();
                  router.push("/home-page");
                }}
              >
                {"Тийм"}
              </Typography>
              <Typography
                width={"50%"}
                display={"grid"}
                sx={{ placeContent: "center" }}
                fontWeight={600}
                fontSize={"20px"}
                bgcolor={"#18BA5133"}
                onClick={() => handleClose()}
              >
                {"Үгүй"}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};
