import { FoodDelivery } from "@/assets/svg/FoodDeliery";
import { Container, Stack, Typography } from "@mui/material";
import ButtonLink from "./Link";

import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const allLink = [
  { label: "Нүүр" },
  { label: "Холбоо барих" },
  { label: "Хоолны цэс" },
  { label: "Үйлчилгээний нөхцөл" },
  { label: "Хүргэлтийн бүс" },
  { label: "Нууцлалын бодлого" },
];

export function Footer() {
  const router = useRouter();
  return (
    <Stack
      style={{
        padding: "114px 0",
        background: "#18BA51",
        position: "relative",
        backgroundImage: "url(/Food.png)",
      }}
    >
      <Container maxWidth="lg">
        <Stack paddingBottom="40px" alignItems="center" gap={5}>
          <FoodDelivery />
          <Stack direction="row" justifyContent="space-between" width="100%">
            {allLink.map((item) => (
              <ButtonLink
                label={item.label}
                onClick={() => {
                  if (item.label === "Нүүр") {
                    router.push("/home-page");
                  }
                  if (item.label === "Холбоо барих") {
                    router.push("/home-page");
                  }
                  if (item.label === "Хоолны цэс") {
                    router.push("/menu-page");
                  }
                  if (item.label === "Үйлчилгээний нөхцөл") {
                    router.push("/terms-of-service");
                  }
                  if (item.label === "Хүргэлтийн бүс") {
                    router.push("/delivery-area");
                  }
                  if (item.label === "Нууцлалын бодлого") {
                    router.push("/privacy-policy");
                  }
                }}
              />
            ))}
          </Stack>
          <Stack direction="row" gap="18px">
            <FacebookOutlined htmlColor="white" fontSize="large" />
            <Instagram htmlColor="white" fontSize="large" />
            <Twitter htmlColor="white" fontSize="large" />
          </Stack>
        </Stack>
        <Stack gap={1} borderTop="white 1px solid" paddingTop={5}>
          <Typography
            fontWeight={400}
            textAlign="center"
            fontSize="16px"
            color="white"
          >
            © 2024 Pinecone Foods LLC{" "}
          </Typography>
          <Typography
            fontWeight={400}
            textAlign="center"
            fontSize="16px"
            color="white"
          >
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
}
