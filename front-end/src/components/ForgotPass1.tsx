"use client";

import { Stack, Typography } from "@mui/material";
import { CustomButton, CustomInput } from ".";
import { useFormik } from "formik";
import * as yup from "yup";
import { Dispatch, SetStateAction } from "react";

const validationSchema = yup.object({
  email: yup.string().email().required(),
});

export type ForgotPassProps = {
  setStep: Dispatch<SetStateAction<number>>;
  email: string;
  setEmail?: Dispatch<SetStateAction<string>>;
};

export function ForgotPass1(props: ForgotPassProps) {
  const { setStep } = props;
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values.email);
    },
  });

  return (
    <Stack py={8}>
      <Stack
        gap={6}
        padding={4}
        style={{
          width: "448px",
          borderRadius: "16px",
        }}
      >
        <Typography fontWeight={700} fontSize={"28px"} textAlign="center">
          Нууц үг сэргээх
        </Typography>
        <Stack gap={2}>
          <CustomInput
            name="email"
            label="И-мэйл"
            value={formik.values.email}
            placeholder="Имэйл хаягаа оруулна уу"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            type="text"
          />
        </Stack>
        <Stack gap={6}>
          <CustomButton
            variant="contained"
            label="Үргэлжлүүлэх"
            disabled={!formik.values.email}
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
