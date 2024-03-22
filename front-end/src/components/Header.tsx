"use client";

import {
  Stack,
  Typography,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";
import { CustomInput } from "@/components/Input";
import { Choice } from "@/components";
import { PersonOutlineOutlined, SearchOutlined } from "@mui/icons-material";
import { Pinecone } from "@/assets/svg/Pinecone";
import { usePathname, useRouter } from "next/navigation";

import { LogInModal } from "./LogIn";
import { useAuth } from "./providers/AuthProvider";
import { Basket } from "./Drawer";
import Link from "next/link";

const text = [
  { label: "НҮҮР", link: "/home-page" },
  { label: "ХООЛНЫ ЦЭС", link: "/menu-page" },
  { label: "ХҮРГЭЛТИЙН БҮС", link: "/delivery-area" },
];

export function Header() {
  const router = useRouter();
  const { isLogged, checkAdmin } = useAuth();

  const pathName = usePathname();

  return (
    <Stack
      direction="row"
      style={{
        width: "100%",
        position: "fixed",
        zIndex: "30",
        top: "0",
        height: "57px",
      }}
      bgcolor="white"
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row" style={{ alignItems: "center" }}>
          <Pinecone />
          <Stack direction="row" gap={1} alignItems="center">
            {text.map((a, index) => {
              return (
                <Link href={a.link}>
                  <Typography
                    key={index}
                    fontWeight={700}
                    fontSize="14px"
                    padding="12px 16px"
                    sx={{
                      cursor: "pointer",
                      color: pathName === a.link ? "primary.main" : null,
                    }}
                  >
                    {a.label}
                  </Typography>
                </Link>
              );
            })}
            {checkAdmin && (
              <Typography
                fontWeight="800"
                fontSize="16px"
                color={pathName.includes("admin") ? "primary.main" : "black"}
                onClick={() => {
                  router.push("/admin");
                }}
              >
                Admin
              </Typography>
            )}
          </Stack>
        </Stack>
        <Stack direction="row" gap={1} style={{ alignItems: "center" }}>
          <TextField
            type="search"
            placeholder="Хайлт"
            variant="standard"
            sx={{
              border: "solid 1px black",
              borderRadius: "8px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment sx={{ padding: "8px" }} position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
          <Basket />
          {isLogged === true ? (
            <Choice
              name="Хэрэглэгч"
              icon={<PersonOutlineOutlined />}
              onClick={() => {
                router.push("/user");
              }}
            />
          ) : (
            <LogInModal />
          )}
        </Stack>
      </Container>
    </Stack>
  );
}
