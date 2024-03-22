import { OrderBasket } from "@/components/OrderBasket";
import { OrderInformation } from "@/components/OrderInformation";
import { OrderIntro } from "@/components/OrderIntro";
import { Stack } from "@mui/material";

export default function FoodOrder() {
  return (
    <Stack
      height="100vh"
      width="100vw"
      display="grid"
      sx={{ placeContent: "center" }}
    >
      <Stack direction="row" width="100%" gap="12%">
        <OrderIntro
          label="Хаягийн мэдээлэл оруулах"
          title="Алхам 1"
          text="Хүлээгдэж байна"
        />{" "}
        <OrderIntro
          label="Захиалга баталгаажуулах"
          title="Алхам 2"
          text="Хүлээгдэж байна"
        />
      </Stack>
      <Stack direction="row" width="100%" gap="10%">
        <OrderInformation />
        <OrderBasket />
      </Stack>
      {/* <Stack gap={3}>
        {" "}
        <OrderIntro
          label="Хаягийн мэдээлэл оруулах"
          title="Алхам 1"
          text="Хүлээгдэж байна"
        />
        <OrderInformation />
      </Stack>
      <Stack>
        <OrderIntro
          label="Захиалга баталгаажуулах"
          title="Алхам 2"
          text="Хүлээгдэж байна"
        />
        <OrderBasket />
      </Stack> */}
    </Stack>
  );
}
