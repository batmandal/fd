"use client";
import { Stack, Typography } from "@mui/material";
import { CustomButton, CustomInput } from ".";
import { useFormik } from "formik";
import * as yup from "yup";
import { ForgotPassProps } from "./ForgotPass1";

const validationSchema = yup.object({
  password: yup.string().required(),
});

export function ForgotPass2(props: ForgotPassProps) {
  const { setStep } = props;
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values.password);
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
        <Stack gap={4}>
          <Typography>
            Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно.{" "}
          </Typography>
          <CustomInput
            label="Нууц үг сэргээх код"
            value={formik.values.password}
            placeholder="код оруулна уу"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            type="password"
            name="password"
          />
        </Stack>
        <Stack gap={6}>
          <CustomButton
            variant="contained"
            label="Үргэлжлүүлэх"
            disabled={!formik.values.password}
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
