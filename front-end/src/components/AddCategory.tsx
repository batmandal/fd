"use client";
import { Add, Close } from "@mui/icons-material";
import { Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useData } from "./providers/DataProvider";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  categoryName: yup.string().required(),
});

export function AddCategory() {
  const { categoryPost } = useData();

  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      categoryName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (value) => {
      categoryPost(value.categoryName);
    },
  });

  const handleClose = () => [setOpen(false)];

  return (
    <>
      <Stack
        onClick={() => {
          setOpen(true);
        }}
        direction="row"
        gap={1}
        sx={{
          color: "#5E6166",
          cursor: "pointer",
          ":hover": { background: "#18BA51", color: "white" },
        }}
        border="solid 1px #D6D8DB"
        width="100%"
        borderRadius={2}
        py={1}
        px={2}
      >
        <Add /> {"Add new category"}
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
              Create new category
            </Typography>
          </Stack>
          <Stack padding={3} gap={1}>
            <Typography fontWeight={500} fontSize="14px">
              Category name
            </Typography>
            <TextField
              type="text"
              name="categoryName"
              value={formik.values.categoryName}
              placeholder="Category name"
              sx={{ background: "#F4F4F4" }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.categoryName &&
                Boolean(formik.errors.categoryName)
              }
              helperText={
                formik.touched.categoryName && formik.errors.categoryName
              }
            ></TextField>
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
                formik.handleSubmit(), handleClose();
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
