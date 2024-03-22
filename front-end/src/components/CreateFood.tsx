"use client";

import { Add, Close } from "@mui/icons-material";
import {
  Button,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useData } from "./providers/DataProvider";
import { useFetch } from "@/hooks/useFetch";
import { CategoryStyleType } from "@/app/admin/page";
import { Toggle } from "./Toggle";

const validationSchema = yup.object({
  name: yup.string(),
  categoryName: yup.string(),
  ingredient: yup.string(),
  price: yup.number(),
  onSale: yup.number(),
  saled: yup.number(),
  image: yup.string(),
});

export function CreateFood() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const { foodPost } = useData();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [onToggle, setOnToggle] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      categoryName: "",
      ingredient: "",
      price: 0,
      onSale: "",
      saled: 0,
      image: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      foodPost(
        values.name,
        values.categoryName,
        values.ingredient,
        values.price,
        onToggle,
        values.saled,
        newImageUrl
      );
    },
  });

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dl0k92sfh/upload?upload_preset=wug703jq",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
        setNewImageUrl(data.secure_url);
        console.log(data.secure_url, "imageURL");
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };

  const {
    datas: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useFetch<CategoryStyleType[] | null[]>(
    "http://localhost:3008/categories"
  );

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
          <Stack padding={3}>
            <Typography>{"Хоолны нэр"}</Typography>
            <TextField
              placeholder="Хоолны нэр оруулна уу"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <Typography>{"Хоолны ангилал"}</Typography>
            <TextField
              placeholder="Хоолны ангилал сонгоно уу"
              select={true}
              name="categoryName"
              value={formik.values.categoryName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.categoryName &&
                Boolean(formik.errors.categoryName)
              }
              helperText={
                formik.touched.categoryName && formik.errors.categoryName
              }
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
            <Typography>{"Хоолны орц"}</Typography>
            <TextField
              placeholder="Хоолны орц оруулна уу"
              type="text"
              name="ingredient"
              value={formik.values.ingredient}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.ingredient && Boolean(formik.errors.ingredient)
              }
              helperText={formik.touched.ingredient && formik.errors.ingredient}
            />

            <Typography>{"Хоолны үнэ"}</Typography>
            <TextField
              placeholder="Хоолны үнэ оруулна уу"
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
            <Toggle
              onClick={() => {
                setOnToggle((prev) => !prev);
              }}
              onToggle={onToggle}
            />
            <TextField
              placeholder="saled percent"
              type="number"
              name="saled"
              disabled={onToggle == false}
              value={formik.values.saled}
              onChange={formik.handleChange}
            />
            <Typography>{"Хоолны зураг"}</Typography>
            <Stack
              direction={"row"}
              border={"solid 2px black"}
              height={"150px"}
            >
              <TextField
                sx={{
                  width: "50%",
                  height: "100%",
                  display: "grid",
                  placeContent: "center",
                }}
                type="file"
                name="image"
                value={formik.values.image}
                onChange={handleImageChange}
              />
              <Stack width={"50%"}>
                {newImageUrl && (
                  <Stack
                    border={"solid 2px black"}
                    width={"100%"}
                    height={"100%"}
                    overflow={"hidden"}
                    bgcolor={"red"}
                  >
                    <img
                      src={`${newImageUrl}`}
                      alt="uploaded"
                      style={{ objectFit: "contain" }}
                    />
                  </Stack>
                )}
                <Button variant="contained" onClick={handleImageUpload}>
                  {"upload image"}
                </Button>
              </Stack>
            </Stack>
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
              disabled={
                !formik.values.name ||
                !formik.values.categoryName ||
                !formik.values.ingredient ||
                !formik.values.price
              }
              variant="contained"
              // sx={{ background: "#393939", color: "white" }}
              onClick={() => {
                formik.handleSubmit();
                handleClose();
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
