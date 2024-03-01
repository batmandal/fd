import { CustomInput } from "@/components";
import { CheckBox, PlaceOutlined } from "@mui/icons-material";
import { MenuItem, Stack, TextField, Typography } from "@mui/material";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const street = [
  ["Баянзүрх дүүрэг", "Хан-Уул дүүрэг", "Хан-Уул дүүрэг"],
  ["1-р хороо", "2-р хороо", "3-р хороо"],
  ["Нархан хотхон", "26-р байр", "Хоймор хотхон"],
];

export function OrderInformation() {
  return (
    <Stack
      width="432px"
      borderRadius={2}
      gap={5}
      padding={3}
      sx={{ boxShadow: "4px 4px 10px 8px #F6F6F6" }}
      height="100%"
    >
      <Stack gap={2}>
        <Typography>Хаяг аа оруулна уу</Typography>
        {street.map((item, index) => {
          return (
            <>
              <SelectInput key={index} ind={index} />
            </>
          );
        })}
      </Stack>
      <Stack gap={4}>
        <CustomInput
          label="Нэмэлт мэдээлэл"
          type="text"
          placeholder="Орц, давхар, орцны код ..."
        />

        <CustomInput
          label="Утасны дугаар*"
          type="number"
          placeholder="Утасны дугаараа оруулна уу"
        />
        <Stack direction="row" gap={4}>
          <Stack direction="row" gap={2}>
            <Checkbox {...label} />
            <Typography
              fontWeight={400}
              fontSize="16px"
              color="#8B8E95"
              display="flex"
              alignItems="center"
            >
              Бэлнээр
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <Checkbox {...label} />
            <Typography
              fontWeight={400}
              fontSize="16px"
              color="#8B8E95"
              display="flex"
              alignItems="center"
            >
              Картаар
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

type SelectInputProps = {
  ind: number;
};
export function SelectInput({ ind }: SelectInputProps) {
  return (
    <TextField select={true} sx={{ width: "100%" }}>
      {street[ind].map((item, index) => {
        return (
          <>
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          </>
        );
      })}
    </TextField>
  );
}
