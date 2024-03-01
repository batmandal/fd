"use client";

import { Add, Close } from "@mui/icons-material";
import { Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import * as yup from "yup";
import { Inputs } from "./FoodInputs";
import { useFormik } from "formik";
import { useData } from "./providers/DataProvider";

// type Input = {
//   label: string;
//   placeholder: string;
//   type: string;
//   name:
// };

const inputs2 = [
  {
    label: "Хоолны нэр",
    placeholder: "Хоолны нэр",
    type: "text",
    name: "name",
  },
  {
    label: "Хоолны ангилал",
    placeholder: "Хоолны ангилал",
    type: "select",
    name: "category",
  },
  {
    label: "Хоолны орц",
    placeholder: "Хоолны орц",
    type: "text",
    name: "ingredient",
  },
  {
    label: "Хоолны үнэ",
    placeholder: "Хоолны үнэ",
    type: "number",
    name: "price",
  },
  {
    label: "Хямдралтай эсэх",
    placeholder: "Хоолны нэр",
    type: "number",
    name: "onSale",
  },
  {
    label: "Хоолны зураг",
    placeholder: "Хоолны нэр",
    type: "file",
    name: "image",
  },
];

const validationSchema = yup.object({
  name: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().required(),
  onSale: yup.number(),
  image: yup.string().required(),
  ingredient: yup.string(),
});

export function CreateFood() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const { foodPost } = useData();

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      price: "",
      ingredient: "",
      onSale: "",
      image: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(formik.values.name);
    },
  });

  return (
    <>
      <Stack
        onClick={() => {
          setOpen(true);
        }}
        direction="row"
        gap={1}
        sx={{ color: "white" }}
        border="solid 1px #D6D8DB"
        width="fit-content"
        borderRadius={2}
        py={1}
        px={2}
        bgcolor="#18BA51"
      >
        <Add /> {"Add new food"}
      </Stack>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "grid", placeContent: "center" }}
      >
        <Stack width="587px" sx={{ background: "white", borderRadius: "16px" }}>
          <Stack
            direction="row"
            borderBottom="solid 1px #E0E0E0"
            padding={3}
            alignItems="center"
          >
            <Stack onClick={handleClose}>
              <Close />
            </Stack>
            <Typography
              justifyContent="center"
              display="flex"
              width="100%"
              fontWeight={700}
              fontSize="24px"
            >
              Create food
            </Typography>
          </Stack>
          <Stack padding={3} gap={2}>
            {inputs2.map((inp) => {
              const { placeholder, type, label, name } = inp;
              return (
                <Inputs
                  name={name}
                  placeholder={placeholder}
                  onChange={formik.handleChange}
                  value={formik.values[name as keyof typeof formik.values]}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched[name as keyof typeof formik.values] &&
                    Boolean(formik.errors[name as keyof typeof formik.values])
                  }
                  helperText={
                    formik.touched[name as keyof typeof formik.values] &&
                    formik.errors[name as keyof typeof formik.values]
                  }
                  type={type}
                  label={label}
                />
              );
            })}
          </Stack>
          <Stack
            direction="row"
            borderTop="solid 1px #E0E0E0"
            padding={3}
            gap={2}
            justifyContent="flex-end"
          >
            <Button
              sx={{ color: "#393939", fontWeight: "700", fontSize: "16px" }}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              sx={{ background: "#393939", color: "white" }}
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Continue
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
}
