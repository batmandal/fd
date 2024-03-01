import {
  MenuItem,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { Toggle } from "./Toggle";
import { useFetch } from "@/hooks/useFetch";
import { CategoryStyleType } from "@/app/admin/page";

export type inputsType = {
  label: string;
  icon?: ReactNode;
  placeholder: string;
  src?: string;
  type: string;
};
export function Inputs(props: inputsType & TextFieldProps) {
  const { label, icon, placeholder, type, ...rest } = props;
  const {
    datas: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useFetch<CategoryStyleType[] | null[]>(
    "http://localhost:3008/categories"
  );

  const [foodImage, setFoodImage] = useState<string>("");

  return (
    <Stack gap={1}>
      <Stack direction="row" alignItems="center" gap={1}>
        <Toggle
          style={{ display: `${label === "Хямдралтай эсэх" ? null : "none"}` }}
        />
        <Typography>{label}</Typography>
      </Stack>
      <Stack width="100%">
        <Stack direction="row" gap={1} alignItems="center">
          <Stack alignItems="center" gap={1} width="100%" bgcolor="#F4F4F4">
            <Typography
              style={{
                display: `${type === "file" ? "flex" : "none "}`,
              }}
              fontSize="16px"
              fontWeight={700}
            >
              Add image for the food
            </Typography>
            <TextField
              {...rest}
              placeholder={placeholder}
              type={type}
              style={{ width: "100%" }}
              onChange={(event) => setFoodImage(event.target.value)}
              sx={{
                display: `${label === "Хоолны ангилал" ? "none" : null}`,
              }}
            ></TextField>
            <TextField
              {...rest}
              select={true}
              placeholder="eesda"
              sx={{
                width: "100%",
                display: `${label === "Хоолны ангилал" ? null : "none"}`,
              }}
            >
              {categoryData.map((category) => {
                return (
                  <MenuItem
                    key={category?.categoryName}
                    value={category?.categoryName}
                  >
                    {" "}
                    {category?.categoryName}{" "}
                  </MenuItem>
                );
              })}
            </TextField>
          </Stack>
          <img
            src={foodImage}
            alt=""
            style={{
              display: `${type === "file" ? "flex" : "none "}`,
              width: "50%",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
