"use client";

import { Cloud } from "@/assets/svg/Cloud";
import { CustomInput, CustomButton } from "@/components";
import { useAuth } from "@/components/providers/AuthProvider";

import { Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  address: yup.string(),
  name: yup.string().required(),
});

export default function SignUp() {
  const { signup } = useAuth();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signup(values.name, values.email, values.password);
    },
  });

  return (
    <Stack display="grid" style={{ placeContent: "center" }}>
      <Stack
        gap={6}
        padding={4}
        style={{
          width: "448px",
          borderRadius: "16px",
        }}
      >
        <Typography fontWeight={700} fontSize={"28px"} textAlign="center">
          Бүртгүүлэх
        </Typography>
        <Stack gap={2}>
          <CustomInput
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            name="name"
            label="Нэр"
            placeholder="Нэрээ оруулна уу"
            type="text"
          />
          <CustomInput
            label="И-мэйл"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            name="email"
            placeholder="Имэйл хаягаа оруулна уу"
            type="text"
          />
          <CustomInput
            label="Хаяг"
            placeholder="Та хаягаа оруулна уу"
            type="text"
          />
          <CustomInput
            label="Нууц үг"
            placeholder="Нууц үг"
            value={formik.values.password}
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            name="password"
          />
          <CustomInput
            label="Нууц үг давтах"
            placeholder="Нууц үг давтах"
            value={formik.values.password}
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            name="password"
          />
        </Stack>
        <Stack gap={6}>
          <Typography
            fontWeight={400}
            fontSize="14px"
            display="flex"
            alignItems="center"
          >
            <Cloud /> Үйлчилгээний нөхцөл зөвшөөрөх
          </Typography>

          <CustomButton
            variant="contained"
            label="Бүртгүүлэх"
            disabled={
              !formik.values.email ||
              !formik.values.password ||
              !formik.values.name
            }
            sx={{
              width: "384px",
              height: "48px",
            }}
            onClick={() => {
              formik.handleSubmit();
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
